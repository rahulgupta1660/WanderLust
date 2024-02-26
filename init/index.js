const mongoose = require("mongoose");

const initData = require("./Data.js");

const Listing = require("../models/Listing.js");

//connect to database
main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WanderLust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65d215a5506321a123bd0c02",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
