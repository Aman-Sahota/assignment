const express = require("express");
require("dotenv").config();

const routes = require("./api/routes");

//CORS Setup
const cors = require("cors");

//Express Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

//Error handling
app.use("*", (req, res, next) => {
  const err = new Error("Route Not Found");
  err.statusCode = 404;
  next(err);
});

app.use(async (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ success: false, message: err.message, error: err.stack });
});

app.listen(process.env.PORT, () =>
  console.log(`App is running on port:${process.env.PORT}`)
);
