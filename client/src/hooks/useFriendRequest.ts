import {useState, useEffect} from "react";
import {useAuth} from "../context/auth.context.tsx";
import {
    sendFriendRequest,
    fetchFriendStatus,
    removeFriendRequest,
    acceptFriendRequest,
    removeFriend
} from "../services/friends.service.ts";

export function useFriendRequest(publicId: string) {
    const [loading, setLoading] = useState(false);
    const [statusLoading, setStatusLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const {token} = useAuth();

    useEffect(() => {
        if (!token || !publicId) return;

        const getStatus = async () => {
            try {
                setStatusLoading(true);
                const data = await fetchFriendStatus(publicId, token as string);
                setStatus(data.status);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setStatusLoading(false);
            }
        };

        getStatus();
    }, [publicId, token]);

    const handleSendRequest = async () => {
        try {
            setLoading(true);
            setError(null);
            await sendFriendRequest(publicId, token as string);
            setStatus("pending");
        } catch (err: any) {
            console.log("send request error", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveRequest = async () => {
        try {
            setLoading(true);
            setError(null);
            await removeFriendRequest(publicId, token as string);
            setStatus(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAcceptRequest = async () => {
        try {
            setLoading(true);
            setError(null);
            await acceptFriendRequest(publicId, token as string);
            setStatus("accepted");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFriend = async () => {
        try {
            setLoading(true);
            setError(null);
            await removeFriend(publicId, token as string);
            setStatus(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {handleSendRequest, handleRemoveRequest, handleAcceptRequest, handleRemoveFriend, loading, statusLoading, error, status};
}