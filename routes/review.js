const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isAuthorizedauthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");

// Review Post Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Review Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthorizedauthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
