const API_URL = "http://localhost:8080/api";

export async function loginRequest(data: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    console.log(await response.json())
    const json = await response.json();
    return {ok: response.ok, json};
}

export async function registerRequest(data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    const json = await response.json();
    return {ok: response.ok, json};
}