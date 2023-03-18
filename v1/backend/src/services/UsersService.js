const BaseService = require("./BaseService.js");
const UserModel = require("../models/UserModel");

class UsersService extends BaseService {
  model = UserModel;
}
module.exports = new UsersService();
