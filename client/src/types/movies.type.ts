export type Genre = {
    id: number;
    name: string;
};

export type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
};

export type MoviePayload = {
    tmdbId: number;
    title: string;
    poster: string;
    year: string;
    genres: string[];
};