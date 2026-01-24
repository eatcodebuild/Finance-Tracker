import express from "express";
import { updateUser } from "../controllers/userController.js";

const router = express.Router();

router.patch("/update/:userId", updateUser);

export default router;