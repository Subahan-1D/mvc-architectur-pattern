const express = require("express");
const { getUser, postUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", getUser);

router.post("/user", postUser);

module.exports = router;
