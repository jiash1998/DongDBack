var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/DongDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

//用户表
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

//组织表
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

//请假表
var SchemaLeave = new Schema({
  username: {
    type: String,
    required: true,
  },
  organCode: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  detail: {
    type: String,
  },
  time: {
    type: Array,
  },
  status: {
    type: String,
  },
});
module.exports = {
  users: mongoose.model("users", SchemaUser),
  organs: mongoose.model("organs", SchemaOrgan),
  leaves: mongoose.model("leaves", SchemaLeave),
};
