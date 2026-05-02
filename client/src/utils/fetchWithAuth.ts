import { refreshTokenRequest } from "../services/auth.service.ts";

function buildHeaders(token: string, options: RequestInit): HeadersInit {
    return {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };
}

async function tryRefreshToken(): Promise<string> {
    const { ok, json } = await refreshTokenRequest();

    if (!ok) {
        window.location.href = "/login";
        throw new Error("Session expired");
    }

    localStorage.setItem("token", json.token);
    return json.token;
}

export async function fetchWithAuth(url: string, token: string, options: RequestInit = {}): Promise<Response> {
    const res = await fetch(url, {
        ...options,
        headers: buildHeaders(token, options),
    });

    if (res.status !== 401) return res;

    const newToken = await tryRefreshToken();

    return fetch(url, {
        ...options,
        headers: buildHeaders(newToken, options),
    });
}