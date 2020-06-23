var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/DongDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var SchemaUser = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  admin: {
    type: String,
    defalut: "false",
  },
  organName: {
    type: String,
    default: "none",
  },
  organCode: {
    type: String,
    default: "none",
  },
});

var SchemaOrgan = new Schema({
  organName: {
    type: String,
    required: true,
  },
  organCode: {
    type: String,
    required: true,
    default: "",
  },
  organScale: {
    type: String,
    default: "",
  },
  organIndustry: {
    type: String,
    defalut: "",
  },
  organBoss: {
    type: String,
    default: "",
  },
  organPhone: {
    type: String,
    default: "",
  },
});

module.exports = {
  users: mongoose.model("users", SchemaUser),
  organs:mongoose.model("organs", SchemaOrgan)
};
