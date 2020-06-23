var express = require("express");
var router = express.Router();
var operateDB = require("../DBOperate/operateDB");

router.get("/", (req, res) => {
  res.send("Hello Dong");
});

//公共模块
//登录接口
router.post("/signin", (req, res) => {
  operateDB.signin(req.body, (err, data) => {
    if (err || data.length === 0) {
      return res.json({
        status: 200,
        msg: "登录失败",
      });
    }
    return res.json({
      status: "200",
      value: data[0],
      msg: "保存成功",
    });
  });
});

//注册接口
router.post("/register", (req, res) => {
  //   console.log(req.body);
  operateDB.register(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "发送错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "保存成功",
    });
  });
});

//管理员模块
//创建组织
router.post("/createOrgan", (req, res) => {
  console.log(req.body);

  operateDB.createOrgan(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "发送错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data[0],
      msg: "保存成功",
    });
  });
});

//获取名下组织
router.post("/getOrganByName", (req, res) => {
  console.log(req.body);
  operateDB.getOrganByName(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "发送错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "保存成功",
    });
  });
});

//获取员工
router.post("/allOrganUser", (req, res) => {
  operateDB.getAllUser(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "成功",
    });
  });
});

//用户模块
//获取所有组织
router.get("/getAllOrgan", (req, res) => {
  operateDB.getAllOrgan((err, data) => {
    if (err) {
      return res.json({
        status: "发送错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "保存成功",
    });
  });
});

//获取个人信息
router.post("/getInfoSelf", (req, res) => {
  operateDB.getInfoSelf(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "发送错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "成功",
    });
  });
});

//加入组织
router.post("/addOrgan", (req, res) => {
  operateDB.addOrgan(req.body, (err, data) => {
    if (err) {
      return res.json({
        status: "错误",
        msg: err,
      });
    }
    return res.json({
      status: "200",
      value: data,
      msg: "保存成功",
    });
  });
});
module.exports = router;
