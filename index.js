import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
require("dotenv").config();

const { PORT, DATABASE_URL } = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors setup
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Our application is running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
