const mongoose = require("mongoose");

const DB =
  "mongodb+srv://masumc626:mc9851981864@cluster1.qhzrac0.mongodb.net/instaclone?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
