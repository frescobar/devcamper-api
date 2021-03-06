const express = require("express");
const dotenv = require("dotenv");
const app = express();
//Routes file
const bootcamps = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

//Use routes from the routes file
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
