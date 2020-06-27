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

//获取员工
exports.getAllUser = (data, callback) => {
  AllDB.users
    .find({ organName: data.organName })
    .then((res) => {
      console.log(res);
      callback(null, res);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

//获取员工假条
exports.getLeaveInfo = (data, callback) => {
  AllDB.leaves
    .find({ organCode: data.organCode })
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

//用户模块
//获取所有组织
exports.getAllOrgan = (callback) => {
  AllDB.organs
    .find({})
    .then((res) => {
      //   console.log(res);
      callback(null, res);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};
//获取个人信息
exports.getInfoSelf = (data, callback) => {
  console.log(data);
  let obj = {};
  AllDB.users
    .findOne({ username: data.username })
    .then((res) => {
      obj = res;
      if (res.organName != "none" && res.organCode != "none") {
        AllDB.organs.findOne({ organCode: res.organCode }).then((res) => {
          callback(null, { user: obj, organ: res });
        });
      } else {
        callback(null, obj);
      }
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};
//加入组织
exports.addOrgan = (data, callback) => {
  console.log(data);

  AllDB.users
    .update(
      { username: data.username },
      { $set: { organName: data.organName, organCode: data.organCode } }
    )
    .then((res) => {
      console.log(res);
      callback(null, res);
    })
    .catch((er) => {
      console.log(err);
      callback(err);
    });
};

//打卡
exports.clockin = (data, callback) => {
  AllDB.clocks
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

//请假
exports.leave = (data, callback) => {
  console.log("请假:", data);

  AllDB.leaves
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

//获取自己的请假信息
exports.getLeaves = (data, callback) => {
  AllDB.leaves
    .find({ username: data.username })
    .then((pro) => {
      console.log("保存成功", pro);
      callback(null, pro);
    })
    .catch((err) => {
      console.log("保存失败", err);
      callback(err);
    });
};
