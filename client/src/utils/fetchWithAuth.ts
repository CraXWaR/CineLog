function buildHeaders(token: string, options: RequestInit): HeadersInit {
    return {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };
}

let refreshTokenFn: (() => Promise<string | null>) | null = null;

export function setRefreshTokenFn(fn: () => Promise<string | null>) {
    refreshTokenFn = fn;
}
//TODO TEST WITHOUTH IT
// import { refreshTokenRequest } from "../services/auth.service.ts";
// async function tryRefreshToken(): Promise<string> {
//     const { ok, json } = await refreshTokenRequest();
//     console.log("REFRESH ok:", ok);
//     console.log("REFRESH json:", json);
//     if (!ok) {
//         // window.location.href = "/login";
//         throw new Error("Session expired");
//     }
//     localStorage.setItem("token", json.token);
//     return json.token;
// }

export async function fetchWithAuth(url: string, token: string, options: RequestInit = {}): Promise<Response> {
    const res = await fetch(url, {
        ...options,
        headers: buildHeaders(token, options),
    });

    if (res.status !== 401) return res;

    if (!refreshTokenFn) throw new Error("No refresh function");

    const newToken = await refreshTokenFn();
    if (!newToken) throw new Error("Session expired");

    return fetch(url, {
        ...options,
        headers: buildHeaders(newToken, options),
    });
}