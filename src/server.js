import express from "express";
import { config } from "dotenv";
import router from "./routes/index.routes.js";

config();

const port = process.env.PORT || 4003;

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   return res.status(200).send({ message: "Hello World!" });
// });

app.use(router);

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);