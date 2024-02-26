const express = require("express");

const router = express.Router();

const WrapAsync = require("../utils/WrapAsync.js");

const reviewController = require("../controllers/reviews.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

//create route
router.post(
  "/listings/:id/reviews",
  isLoggedIn,
  validateReview,
  WrapAsync(reviewController.createReview)
);

//delete route
router.delete(
  "/listings/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  WrapAsync(reviewController.destroyReview)
);

module.exports = router;
