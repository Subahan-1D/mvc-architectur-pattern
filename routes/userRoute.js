const express = require("express");
const { getUser, postUser } = require("../controllers/userController");
const { postProduct, getProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/", getUser);

router.post("/user", postUser);

router.get("/products", getProduct);
router.post("/product", postProduct);

module.exports = router;
