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
    type: String,
  },
  status: {
    type: String,
  },
});

//打卡表
var SchemaClock = new Schema({
  username: {
    type: String,
    required: true,
  },
  organCode: {
    type: String,
    required: true,
  },
  todayStart: {
    type: String,
  },
  todayEnd: {
    type: String,
  },
  isEnd: {
    type: String,
    default:"false"
  },
});
module.exports = {
  users: mongoose.model("users", SchemaUser),
  organs: mongoose.model("organs", SchemaOrgan),
  leaves: mongoose.model("leaves", SchemaLeave),
  clocks: mongoose.model("clocks", SchemaClock),
};
