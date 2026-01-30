import { updateUserByAuth0Id, getUserByAuth0Id } from "../services/userService.js";

const ALLOWED_FIELDS = ["display_name", "full_name", "phone", "profile_pic"];

export async function updateUser(req, res) {
  try {
    const auth0Id = req.auth.payload.sub;

    // Filter body
    const updates = {};
    for (const key of ALLOWED_FIELDS) {
      if (req.body[key] !== undefined) {
        updates[key] = req.body[key];
      }
    }

    const updatedUser = await updateUserByAuth0Id(auth0Id, updates);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user" });
  }
}

export async function getUser(req, res) {
  try {
    const auth0Id = req.auth.payload.sub;

    const returnedUser = await getUserByAuth0Id(auth0Id);
    res.json(returnedUser);
  } catch (error) {
    console.error("Error grabbing user =>", error);
    res.status(500).json({ message: "Failed to grab useer details from database!" });
  }
}
