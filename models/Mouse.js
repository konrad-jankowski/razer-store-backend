const mongoose = require("mongoose");
const { Schema } = mongoose;

const MouseSchema = new Schema({
  name: String,
  line: String,
  model: String,
  image: String,
  images: [String],
  color: String,
  description: String,
  descriptions: [String],
  category: String,
  price: Number,
  new: Boolean,
  exclusive: Boolean,
});

const UserModel = mongoose.model("Mouse", MouseSchema);

module.exports = UserModel;
