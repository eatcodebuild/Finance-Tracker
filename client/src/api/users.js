import { API_BASE_URL } from "../config/api";

export async function updateUser({ display_name, token }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ display_name }),
    });

    if (!response.ok) throw new Error("Error updating user!");

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
