//routes/users.js

const express = require("express");
const router = express.Router();

const usersController = require("../controller/users");

router.get("/", usersController.getAll);

router.get("/:id", usersController.getSingle);

//router.post("/", usersController.createUser);

router.post("/", (req, res, next) => {
  console.log("POST /users called");
  usersController.createUser(req, res, next);
});

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;