import { useEffect, useState } from "react";
import type {ActivityEntry} from "../types/activityEntry.type.ts";

import { fetchActivityFeed } from "../services/activity.service";
import { fetchMovieById } from "../services/userMovies.service.ts";
import {toActivityEntry} from "../utils/acivityFeedUtils.ts";

export function useActivityFeed() {
    const [activities, setActivities] = useState<ActivityEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchActivityFeed()
            .then(async (data) => {
                const enriched = await Promise.all(
                    data.map((entry: any) =>
                        fetchMovieById(entry.movie.tmdbId)
                            .then((movie) => toActivityEntry(entry, movie))
                    )
                );
                setActivities(enriched);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { activities, loading, error };
}