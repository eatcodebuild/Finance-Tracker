import express from "express";
import { updateUser } from "../controllers/userController.js";
import { auth } from "express-oauth2-jwt-bearer";

const router = express.Router();

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: "RS256",
});

router.patch("/update", checkJwt, updateUser);

export default router;
