const express = require("express");
const router = express.Router();
const {
  getUserController,
  getUserIDController,
  putUserController,
  posUserController,
  deleteUserController,
} = require("../Controllers/userController");

router.get("/", getUserController);

router.get("/:id", getUserIDController);

router.put("/:id", putUserController);

router.post("/", posUserController);

router.delete("/:id", deleteUserController);

module.exports = router;
