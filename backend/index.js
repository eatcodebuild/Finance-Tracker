import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import { auth } from "express-oauth2-jwt-bearer";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors("*"));
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
