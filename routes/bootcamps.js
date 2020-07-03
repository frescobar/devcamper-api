const express = require("express");

const router = express.Router();

const {
  getBootcampsController,
  getBootcampController,
  createBootcampController,
  updateBootcampController,
  deleteBootcampController,
} = require("../controllers/bootcamps");

router.get("/", getBootcampsController);

router.get("/:id", getBootcampController);

router.post("/", createBootcampController);

router.put("/:id", updateBootcampController);

router.delete("/:id", deleteBootcampController);

module.exports = router;
