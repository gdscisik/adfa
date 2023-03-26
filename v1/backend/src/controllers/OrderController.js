const OrderService = require("../services/OrderService.js");
const { Query } = require("firefose");

const getAll = async (req, res) => {
    const query = new Query();
    const orders = await OrderService.findAll(query);
    res.render("order", { order: orders });
  };
  const getById = async (req, res) => {
    const query = new Query().where("orderId", '==', `${req.body.id}`);
    const campaign = await OrderService.findById(query);
    res.render("order", { order: order });
  };
  const create = async (req, res) => {
    const sectionData = {
      orderId: "3",
      userId: "ZZMwygqmTYyN0FRyS7tk",
      isCampaign: true,
      isCompleted: false,
      isRequest: true,
    };
    await OrderService.add(sectionData);
    res.render("orders");
  };
  const remove = async (req, res) => {
    const itemId = await OrderService.delete(req.params.id);
    res.render("orders");
  };
  const update = async (req, res) => {
    if (!req.params?.id) {
      return "ID is missing.";
    }
    await OrderService.update(req.params.id, req.body);
    res.send("Order Updated");
  };
  module.exports = {
    getAll,
    getById,
    create,
    remove,
    update,
  };
