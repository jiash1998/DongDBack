var AllDB = require("../DBOperate/connectDB");

//公共模块
//登录接口
exports.signin = (data, callback) => {
  let name = data.username;
  let pass = data.password;
  AllDB.users
    .find({ username: name, password: pass })
    .then((res) => {
      console.log(res);
      callback(null, res);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

//注册接口
exports.register = (data, callback) => {
  console.log("operate:", data);
  AllDB.users
    .insertMany(data)
    .then((pro) => {
      console.log("保存成功", pro);
      callback(null, pro);
    })
    .catch((err) => {
      console.log("保存失败", err);
      callback(err);
    });
};

//管理员模块
//创建组织
exports.createOrgan = (data, callback) => {
  AllDB.organs
    .insertMany(data)
    .then((pro) => {
      console.log("保存成功", pro);
      AllDB.users
        .update(
          { username: pro[0].organBoss },
          { $set: { organName: pro[0].organName, organCode: pro[0].organCode } }
        )
        .then((res) => {
          console.log(res);
          callback(null, pro);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("保存失败", err);
      callback(err);
    });
};

//获取名下组织
exports.getOrganByName = (data, callback) => {
  AllDB.organs
    .findOne({ organBoss: data.username })
    .then((res) => {
      console.log(res);
      callback(null, res);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};
