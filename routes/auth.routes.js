const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const router = Router();

router.get("/signup", (req, res) => {
  authController.signup_get;
});

router.post("/signup", (req, res) => {
  authController.signup_post;
});

router.get("/login", (req, res) => {
  authController.login_get;
});

router.post("/login", (req, res) => {
  authController.login_post;
});

module.exports = router;
