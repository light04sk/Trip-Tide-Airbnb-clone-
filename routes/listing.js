const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {
  isLoggedIn,
  isAuthorizedUser,
  validateListing,
} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route
router.get("/", wrapAsync(listingController.Index));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Route
router.get("/:id", wrapAsync(listingController.showListing));

// Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  upload.single('listing[image]'),
  wrapAsync(listingController.createListing)
);


// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthorizedUser,
  wrapAsync(listingController.renderEditForm)
);

// Update Route
router.put(
  "/:id",
  isLoggedIn,
  isAuthorizedUser,
  validateListing,
  upload.single('listing[image]'),
  wrapAsync(listingController.updateListing)
);

// Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isAuthorizedUser,
  wrapAsync(listingController.destroyListing)
);

module.exports = router;
