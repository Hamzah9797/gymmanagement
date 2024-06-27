import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose
  .connect(MONGO_URI, {
    // These options are no longer necessary
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(json());

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
