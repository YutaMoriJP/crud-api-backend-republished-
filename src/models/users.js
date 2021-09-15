const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "10m" },
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
