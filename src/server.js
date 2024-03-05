import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json()); // express.json() para  poder trabajar con el body
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
