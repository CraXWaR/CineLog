import {useState, useEffect} from "react";
import {fetchFriends} from "../services/friends.service.ts";

import type {Friend} from "../types/friend.type.ts";

export function useFriends(publicId: string) {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!publicId) return;

        const getFriends = async () => {
            try {
                setLoading(true);
                const data = await fetchFriends(publicId);
                setFriends(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getFriends();
    }, [publicId]);

    return {friends, loading, error};
}