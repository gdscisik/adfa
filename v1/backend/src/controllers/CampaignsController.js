const CampaignService = require("../services/CampaignService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  const campaigns = await CampaignService.findAll(query);
  //const campaigns = await CampaignService.findAll(query);
  res.render("campaign", { campaign: campaigns });
};
const getById = async (req, res) => {
  const query = new Query().where("campaignId", '==', `${req.params.id}`);
  const campaign = await CampaignService.findById(query);
  res.render("campaign", { campaign: campaign });
};
const create = async (req, res) => {
  const sectionData = {
    name: "Completed",
    user_id: null,
    project_id: null,
    order: 2,
  };
  await SectionsService.add(sectionData);
  res.render("sections");
};
const remove = async (req, res) => {
  const itemId = await SectionsService.delete(req.params.id);
  res.render("sections");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
