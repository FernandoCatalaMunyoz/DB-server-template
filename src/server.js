import express from "express";
import "dotenv/config";
import { dbConection } from "./database/db.js";

const app = express();
app.use(express.json()); // express.json() para  poder trabajar con el body
const PORT = process.env.PORT || 4001;

dbConection()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
