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

type MovieResponse = {
    id: string;
    tmdbId: string;
}

export type UserWatched = {
    id: string;
    movieId: string;
    userId: string;
    watchedAt: string;
    movie: MovieResponse;
}

export type UserWatchLater = {
    id: string;
    movieId: string;
    userId: string;
    addedAt: string;
    movie: MovieResponse;
}