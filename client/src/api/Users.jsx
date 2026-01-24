import Button from "../components/UI/Button";
import { API_BASE_URL } from "../config/api";

export function UpdateUser({ name, userId }) {
  console.log(name, userId);
  const handleUpdate = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/update/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error updating user!");
      }

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <Button onClick={handleUpdate}>Update User</Button>;
}
  