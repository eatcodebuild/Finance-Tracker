import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import { auth } from "express-oauth2-jwt-bearer";
import { syncUser } from "./middleware/syncUser.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors("*"));
app.use(express.json());

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: "RS256",
});

app.use("/api", checkJwt, syncUser);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
