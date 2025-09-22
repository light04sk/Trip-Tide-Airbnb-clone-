const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");


// Get signup route
router.get("/signup", userController.renderSignupForm);

// Post signup route
router.post(
  "/signup",
  wrapAsync(userController.signedInUser)
);

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.loggedInUser
);

router.get("/logout", userController.loggedOutUser);

module.exports = router;
