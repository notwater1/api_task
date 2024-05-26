import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./database/config.js";
import router from "./routes/task.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(router)

db()
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error: \n", e));

app.listen(PORT, () => {
  console.log("serven running on port: ", PORT);
});
