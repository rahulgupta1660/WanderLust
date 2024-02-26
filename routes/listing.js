const express = require("express");

const router = express.Router();

const WrapAsync = require("../utils/WrapAsync.js");

const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");

const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

router
  .route("/listings")
  .get(WrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    WrapAsync(listingController.createListing)
  );

//new route
router.get("/listings/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/listings/:id")
  .get(WrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    WrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, WrapAsync(listingController.destroyListing));

//edit route
router.get(
  "/listings/:id/edit",
  isLoggedIn,
  isOwner,
  WrapAsync(listingController.renderEditForm)
);

module.exports = router;
