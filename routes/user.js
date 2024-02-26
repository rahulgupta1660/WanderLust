const express = require("express");

const router = express.Router();

const passport = require("passport");

const WrapAsync = require("../utils/WrapAsync.js");

const userController = require("../controllers/users.js");

const { saveRedirectUrl } = require("../middleware.js");

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(WrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
