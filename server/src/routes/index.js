const express = require("express");
const router = express.Router();
const workerRouter = require("./worker");
const skills = require("./skills");
const experience = require("./experience");
const portfolio = require("./portfolio");

router
  .use("/worker", workerRouter)
  .use("/skills", skills)
  .use("/experience", experience)
  .use("/portfolio", portfolio);

module.exports = router;
