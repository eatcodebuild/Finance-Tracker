import { API_BASE_URL } from "../config/api";

export async function updateUser({ name, userId }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/update/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) throw new Error("Error updating user!");

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
}
  