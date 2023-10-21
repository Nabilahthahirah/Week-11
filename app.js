const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const port = 3000;
const todoRouter = require("./routes/todoRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRouter);
app.use(errorHandler);

module.exports = app;
