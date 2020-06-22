var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/DongDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var SchemaUser = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  birthday: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("users", SchemaUser);