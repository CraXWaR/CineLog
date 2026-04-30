import {useState, useEffect} from "react";
import {fetchPublicProfile} from "../services/userProfile.service.ts";
import type {PublicProfile} from "../types/publicProfile.type.ts";

export function usePublicProfile(publicId: string) {
    const [profile, setProfile] = useState<PublicProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!publicId) return;

        const fetchProfile = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchPublicProfile(publicId);
                setProfile(data);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [publicId]);

    return {profile, loading, error};
}