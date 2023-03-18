const DonateRequestService = require("../services/CampaignService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  const donateRequests = await DonateRequestService.findAll(query);
  res.send(donateRequests);
};

const getById = async (req, res) => {
  const query = new Query().where("donateRequestId", "==", `${req.params.id}`);
  const donateRequest = await DonateRequestService.findById(query);
  res.render(donateRequest);
};
const create = async (req, res) => {};
const remove = async (req, res) => {};
const update = async (req, res) => {};
module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};

