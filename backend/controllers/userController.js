import { getManagementToken, updateAuth0User } from "../utils/auth0.js";

export async function updateUser(req, res) {
  const { userId } = req.params;
  const { name } = req.body;

  try {
    const token = await getManagementToken();
    const data = await updateAuth0User(userId, { name }, token);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
