import { API_BASE_URL } from "../config/api";

export async function updateUser({ data, token }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) throw new Error("Error updating user!");

    const info = await response.json();
    return info;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getUser({ token }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/get`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("Error getting user!");

    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
