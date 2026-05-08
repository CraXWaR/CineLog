import type {Movie} from "../types/movies.type.ts";

const API_URL = "http://localhost:8080/api";

export async function fetchAiSuggest(prompt: string): Promise<Movie[]> {
    const res = await fetch(`${API_URL}/movies/ai-suggest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error("Failed to fetch suggestions");

    return await res.json();
}