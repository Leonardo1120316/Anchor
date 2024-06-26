var DataTypes = require("sequelize").DataTypes;
var _class_ = require("./class");
var _message = require("./message");
var _plan = require("./plan");
var _question = require("./question");
var _record = require("./record");
var _user = require("./user");

function initModels(sequelize) {
  var class_ = _class_(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var plan = _plan(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var record = _record(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    class_,
    message,
    plan,
    question,
    record,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
