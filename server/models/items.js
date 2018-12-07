var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
  itemId: Number,
  text: String,
  status: String,
  owner:String
});

var Items = mongoose.model("Items", ItemsSchema);
module.exports = Items;
