import React from "react";
import type {UserWatched, UserWatchLater} from "./movies.type.ts";

export type UserResponse = {
    id: string;
    username: string;
    email: string;
    watchLater: UserWatchLater[];
    watched: UserWatched[]
    createdAt?: string;
    updatedAt?: string;
}

export type AuthContext = {
    isLoggedIn: boolean;
    token: string | null;
    user: UserResponse | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<UserResponse | null>>;
    setAuthUser: (payload: { token: string; user: UserResponse }) => void;
    logout: () => void;
}