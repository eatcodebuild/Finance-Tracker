import express from "express";
import { getUser, updateUser } from "../controllers/userController.js";
import { auth } from "express-oauth2-jwt-bearer";

const router = express.Router();

router.patch("/update", updateUser);
router.get("/get", getUser);

export default router;
