import express from "express";
import cors from "cors";
import "dotenv/config";
import sequelize from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello node");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully");
    console.log(`Server running in http://127.0.0.1:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
});
