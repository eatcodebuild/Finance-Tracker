import { findOrCreateUser } from "../services/userService.js";

export async function syncUser(req, res, next) {
  const auth0Id = req.auth.payload.sub;
  const email = req.auth.payload.email ?? null;

  await findOrCreateUser({ auth0Id, email });

  next();
}
