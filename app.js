var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var Router = require("./router/index");

var app = express();
var port = 3000;

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//跨域
app.use(cors());

//路由
app.use("/", Router);

app.listen(port, () => {
  console.log("Starting...DongDbacks");
});
