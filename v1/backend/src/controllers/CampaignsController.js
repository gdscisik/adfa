const CampaignService = require("../services/CampaignService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  const campaigns = await CampaignService.findAll(query);
  //const campaigns = await CampaignService.findAll(query);
  res.send(campaigns);
};
const getById = async (req, res) => {
  const query = new Query().where("campaignId", "==", `${req.params.id}`);
  const campaign = await CampaignService.findById(query);
  res.send(campaign);
};
const create = async (req, res) => {};
const remove = async (req, res) => {};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
