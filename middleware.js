const CustomError = require("./utils/CustomError.js");

const Listing = require("./models/Listing.js");

const Review = require("./models/Review.js");

const { listingSchema, reviewSchema } = require("./validateSchema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in first..");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "you don't have permission");
    return res.redirect(`/listings/${req.params.id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new CustomError(404, errMsg);
  }
  next();
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new CustomError(404, errMsg);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let review = await Review.findById(req.params.reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "you don't have permission");
    return res.redirect(`/listings/${req.params.id}`);
  }
  next();
};
