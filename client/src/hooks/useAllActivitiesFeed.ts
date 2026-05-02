import { useEffect, useState } from "react";
import type { ActivityEntry } from "../types/activityEntry.type.ts";
import { fetchAllActivities } from "../services/activity.service";
import { fetchMovieById } from "../services/userMovies.service.ts";
import {toActivityEntry} from "../utils/acivityFeedUtils.ts";

const ITEMS_PER_PAGE = 7;

export function useAllActivitiesFeed() {
    const [activities, setActivities] = useState<ActivityEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // fake loading
        const loadActivities = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            fetchAllActivities()
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
        };

        loadActivities();
    }, []);

    const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE);
    const paginated = activities.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return { activities: paginated, totalPages, page, setPage, loading, error };
}