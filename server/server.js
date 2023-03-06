const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true, methods: "GET, PUT, POST, DELETE" }));

app.use(express.json()); // middleware to read json body
app.use(express.urlencoded({ extended: false })); // middleware to read url encoded body

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); // middleware for configured express errorhandling

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
