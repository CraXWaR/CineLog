import type {ActivityEntry} from "../types/activityEntry.type.ts";

function toStars(voteAverage: number) {
    return Math.round((voteAverage / 10) * 5);
}
function timeAgo(dateStr: string) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (diff < 60) return `${diff}S AGO`;
    if (diff < 3600) return `${Math.floor(diff / 60)} MIN AGO`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} HR AGO`;
    return `${Math.floor(diff / 86400)} D AGO`;
}

export function toActivityEntry(entry: any, movie: any): ActivityEntry {
    return {
        id: entry.id,
        username: entry.user.username,
        movie: movie.title,
        stars: toStars(movie.vote_average),
        review: entry.review ?? null,
        timeAgo: timeAgo(entry.watchedAt),
    };
}