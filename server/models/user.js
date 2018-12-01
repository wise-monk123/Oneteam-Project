var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: String,
  token: String,
  name: String,
  email: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
