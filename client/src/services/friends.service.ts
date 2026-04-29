const API_URL = "http://localhost:8080/api";

export async function sendFriendRequest(publicId: string, token: string) {
    const res = await fetch(`${API_URL}/friends/request`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ publicId }),
    });

    if (!res.ok) throw new Error("Failed to send friend request");
    return res.json();
}

export async function fetchFriendStatus(publicId: string, token: string) {
    const res = await fetch(`${API_URL}/friends/status/${publicId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to fetch friend status");
    return res.json();
}

export async function removeFriendRequest(publicId: string, token: string) {
    const res = await fetch(`${API_URL}/friends/request/${publicId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to remove friend request");
}

export async function acceptFriendRequest(publicId: string, token: string) {
    const res = await fetch(`${API_URL}/friends/accept/${publicId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to accept friend request");
    return res.json();
}

export async function removeFriend(publicId: string, token: string) {
    const res = await fetch(`${API_URL}/friends/${publicId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to remove friend");
}