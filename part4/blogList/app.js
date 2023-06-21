const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");
const { unknownEndpoint, requestLogger } = require("./utils/middleware");

logger.info("connecting to MongoDB");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(express.json());
app.use(requestLogger);

app.use("/api/blogs", blogsRouter);
app.use(unknownEndpoint);
module.exports = app;
