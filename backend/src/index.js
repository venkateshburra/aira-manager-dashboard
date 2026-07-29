import "dotenv/config";
import express from "express";
import cors from "cors";
import dns from "dns";

import connectDB from "./config/db.js";
import router from "./routes/taskRoute.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});