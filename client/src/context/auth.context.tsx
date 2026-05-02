import React, {createContext, useContext, useEffect, useState} from "react";
import type {AuthContext, UserResponse} from "../types/user.type.ts";

import {refreshTokenRequest} from "../services/auth.service.ts";

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<UserResponse | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const isLoggedIn = !!token && !!user;

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        const handleStorage = () => {
            const newToken = localStorage.getItem("token");
            setToken(newToken);
        };

        window.addEventListener("storage", handleStorage);
        setLoading(false);

        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const setAuthUser = ({token, user}: { token: string; user: UserResponse }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setToken(token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
    };

    const refreshToken = async (): Promise<string | null> => {
        const { ok, json } = await refreshTokenRequest();
        if (!ok) {
            logout();
            return null;
        }

        setToken(json.token);
        localStorage.setItem("token", json.token);
        return json.token;
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, token, user, setUser, loading, setAuthUser, logout, refreshToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a auth');
    }
    return context;
};