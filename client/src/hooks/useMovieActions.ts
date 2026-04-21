import {useState, useEffect} from "react";
import {checkWatched, checkWatchLater, addToWatchLater, addToWatched, removeFromWatchLater} from "../services/userMovies.service.ts";

export function useMovieActions(tmdbId: number) {
    const [isWatched, setIsWatched] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    const [watchedLoading, setWatchedLoading] = useState(false);
    const [watchLaterLoading, setWatchLaterLoading] = useState(false);
    const [statusLoading, setStatusLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                setStatusLoading(true);
                const [watched, watchLater] = await Promise.all([
                    checkWatched(tmdbId),
                    checkWatchLater(tmdbId),
                ]);
                setIsWatched(watched);
                setIsWatchLater(watchLater);
            } catch(error: any) {
                setError(error);
                console.log(error);
            } finally {
                setStatusLoading(false);
            }
        };
        fetchStatus();
    }, [tmdbId]);

    const handleWatched = async () => {
        if (isWatched || watchedLoading) return;
        try {
            setWatchedLoading(true);
            await addToWatched(tmdbId);
            setIsWatched(true);
            if (isWatchLater) {
                await removeFromWatchLater(tmdbId);
                setIsWatchLater(false);
            }
        } catch(error: any) {
            setError(error);
            console.log(error);
        } finally {
            setWatchedLoading(false);
        }
    };

    const handleWatchLater = async () => {
        if (watchLaterLoading) return;
        try {
            setWatchLaterLoading(true);
            if (isWatchLater) {
                await removeFromWatchLater(tmdbId);
                setIsWatchLater(false);
            } else {
                await addToWatchLater(tmdbId);
                setIsWatchLater(true);
            }
        } catch(error: any) {
            setError(error);
            console.log(error);
        } finally {
            setWatchLaterLoading(false);
        }
    };

    return {
        isWatched,
        isWatchLater,
        watchedLoading,
        watchLaterLoading,
        statusLoading,
        handleWatched,
        handleWatchLater,
        error
    };
}