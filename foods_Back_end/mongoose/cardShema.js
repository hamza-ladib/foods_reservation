const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
  foodId: String,
  clientId:String,
  total:String,
  payment:String,
  confirmed:Boolean,
});
const Card = mongoose.model('Card', CardSchema);
module.exports = Card;