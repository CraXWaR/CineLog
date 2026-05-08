import Groq from "groq-sdk";
import {MovieService} from "./movie.service.js";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

interface ParsedPrompt {
    genreNames: string[];
    keywords: string[];
    excludeSuperhero: boolean;
    mythologyFilter: string;
}

export class AiService {
    private movieService: MovieService;

    constructor() {
        this.movieService = new MovieService();
    }

    async suggestMovies(userPrompt: string): Promise<any[]> {
        const parsed = await this.parseUserPrompt(userPrompt);
        const movies = await this.fetchFromTMDB(parsed);

        if (movies.length === 0) return [];

        return await this.rankMovies(userPrompt, movies, parsed.excludeSuperhero, parsed.mythologyFilter);
    }

    // Ask AI to extract genres and keywords from the user prompt
    private async parseUserPrompt(userPrompt: string): Promise<ParsedPrompt> {
        const result = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            max_tokens: 500,
            messages: [{
                role: "user",
                content: `You are a movie expert. A user is looking for movie recommendations based on this prompt: "${userPrompt}"
                          Extract the following and return ONLY valid JSON, no markdown, no explanation:
                          {
                            "genreNames": ["maximum 2 most relevant genre names only"],
                            "keywords": ["5 to 8 short keywords or themes"],
                            "excludeSuperhero": true or false (true only if the prompt is about historical, mythological, or folklore themes where superhero movies would be irrelevant),
                            "mythologyFilter": "norse" or "greek" or "egyptian" or "japanese" or "indian" or "any" (based on the cultural context of the prompt, "any" if not mythology related)
                          }`
            }],
        });

        const text = result.choices[0]?.message?.content ?? "";
        const clean = text.replace(/```json|```/g, "").trim();

        try {
            return JSON.parse(clean);
        } catch {
            return { genreNames: [], keywords: [], excludeSuperhero: false, mythologyFilter: "any" };
        }
    }

    // Use parsed data to fetch movies from TMDB
    private async fetchFromTMDB(parsed: ParsedPrompt): Promise<any[]> {
        const [allGenres, keywordResults] = await Promise.all([
            this.movieService.getMovieGenres(),
            Promise.all(parsed.keywords.map((kw) => this.searchKeyword(kw))),
        ]);

        const genreIds = parsed.genreNames
            .map((name) => allGenres.find((g: any) => g.name.toLowerCase() === name.toLowerCase())?.id)
            .filter(Boolean)
            .join(",");

        const keywordIds = [...new Set(keywordResults.flat())].join("|");

        // fetch pages 1, 2, 3, 4 to get more candidates
        const [page1, page2, page3, page4] = await Promise.all([
            this.movieService.getDiscoverMovies("1", genreIds || undefined, keywordIds || undefined),
            this.movieService.getDiscoverMovies("2", genreIds || undefined, keywordIds || undefined),
            this.movieService.getDiscoverMovies("3", genreIds || undefined, keywordIds || undefined),
            this.movieService.getDiscoverMovies("4", genreIds || undefined, keywordIds || undefined),
        ]);

        let all = [...page1, ...page2, ...page3, ...page4];

        if (all.length === 0) {
            const searchResults = await Promise.all(
                parsed.keywords.slice(0, 3).map((kw) => this.movieService.searchMovies(kw))
            );
            all = searchResults.flat();
            all = all.filter((m: any) => m.vote_average >= 6 && m.vote_count >= 100);
        }

        all = all.filter((movie: any, index: number, self: any[]) =>
            self.findIndex((x: any) => x.id === movie.id) === index
        );

        return all.filter((m: any) => m.vote_average >= 5 && m.vote_count >= 50);
    }

    // Search a single keyword and return its TMDB IDs
    private async searchKeyword(keyword: string): Promise<number[]> {
        try {
            const params = new URLSearchParams({
                api_key: process.env.TMDB_API_KEY!,
                query: keyword,
            });

            const res = await fetch(`${process.env.TMDB_BASE_URL}/search/keyword?${params}`);
            if (!res.ok) return [];

            const data: any = await res.json();
            return data.results?.slice(0, 3).map((k: any) => k.id) ?? [];
        } catch {
            return [];
        }
    }

    // Ask AI to rank the TMDB results against the original prompt
    private async rankMovies(userPrompt: string, movies: any[], excludeSuperhero: boolean, mythologyFilter: string): Promise<any[]> {
        const exclusionRule = excludeSuperhero
            ? "Avoid Marvel, DC, or any superhero comic book adaptations entirely. Prioritize historical, mythological, or folklore-based films."
            : "";

        const cultureRule = mythologyFilter !== "any"
            ? `Focus only on ${mythologyFilter} mythology and culture. Exclude mythology or folklore from other cultures.`
            : "";

        const movieList = movies
            .slice(0, 50)
            .map((m) => ({ id: m.id, title: m.title, overview: m.overview, release_date: m.release_date }));

        const result = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            max_tokens: 500,
            messages: [{
                role: "user",
                content: `A user is looking for movies with this description: "${userPrompt}"
                          Here are movies fetched from TMDB:
                          ${JSON.stringify(movieList, null, 2)}
                          ${exclusionRule}
                          ${cultureRule}
                          Return ONLY a JSON array of exactly 10 movie IDs ranked by relevance, most relevant first.
                          No explanation, no markdown. Example: [123, 456, 789]`
            }],
        });

        const text = result.choices[0]?.message?.content ?? "";
        const clean = text.replace(/```json|```/g, "").trim();
        let rankedIds: number[] = [];

        try {
            rankedIds = JSON.parse(clean);
        } catch {
            return movies.slice(0, 8);
        }

        return rankedIds
            .map((id) => movies.find((m) => m.id === id))
            .filter(Boolean);
    }
}