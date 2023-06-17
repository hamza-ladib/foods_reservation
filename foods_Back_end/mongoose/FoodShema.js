const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
  title: String,
  type:String,
  service:String,
  price: Number,
  image:String,
  description:String,
  foodMouth:Boolean,
});
const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;