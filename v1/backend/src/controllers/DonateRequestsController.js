const DonateRequestService = require("../services/DonateRequestService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  const donateRequests = await DonateRequestService.findAll(query);
  res.send(donateRequests);
};

const getById = async (req, res) => {
  const donateRequest = await DonateRequestService.findById(req.params.id);
  console.log("donateRequest :>> ", donateRequest);
  res.send(donateRequest);
};
const create = async (req, res) => {
  const data = {
    // donateRequestId,
    createdDate: new Date(),
    creatorId: req.body.creatorId,
    title: req.body.title,
    description: req.body.description,
    attachment: req.body.attachment,
    imageSource: req.body.imageSource,
    donatorId: req.body.donatorId,
    isActive: true,
    categoryList: req.body.categoryList,
  };
  const request = await DonateRequestService.add(data);
  res.send(request);
};
const remove = async (req, res) => {
  const query = new Query().where("donateRequestId", "==", `${req.params.id}`);
  const result = await DonateRequestService.delete(query);
  res.send(result);
};
const update = async (req, res) => {};
module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
