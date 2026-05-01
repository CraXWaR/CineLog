const API_URL = "http://localhost:8080/api";

export async function fetchPublicProfile(publicId: string) {
    const res = await fetch(`${API_URL}/user/${publicId}`);
    if (!res.ok) throw new Error("User not found");
    return res.json();
}

export async function fetchProfileMovies(publicId: string) {
    const res = await fetch(`${API_URL}/user/${publicId}/movies`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
}