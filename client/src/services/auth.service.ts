import type {UserResponse} from "../types/user.type.ts";

const API_URL = "http://localhost:8080/api";

interface ILoginResponse {
    message: string;
    token: string;
    user: UserResponse;
}

export async function loginRequest(data: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        credentials: "include",
    });
    const json: ILoginResponse = await response.json();
    return {ok: response.ok, json};
}

export async function registerRequest(data: { username: string; email: string; password: string; confirmPassword: string; }) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    const json = await response.json();
    return {ok: response.ok, json};
}

export async function refreshTokenRequest() {
    const response = await fetch(`${API_URL}/refresh`, {
        method: "POST",
        credentials: "include",
    });
    const json = await response.json();
    return { ok: response.ok, json };
}
