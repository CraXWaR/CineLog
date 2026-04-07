import React from "react";

export interface IUserResponse {
    id: string;
    username: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IAuthContext {
    isLoggedIn: boolean;
    token: string | null;
    user: IUserResponse | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
    setAuthUser: (payload: { token: string; user: IUserResponse }) => void;
    logout: () => void;
}