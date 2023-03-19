const BaseService = require("./BaseService.js");
const OrderModel = require("../models/OrderModel");

class OrderService extends BaseService {
  model = OrderModel;
}
module.exports = new OrderService();
