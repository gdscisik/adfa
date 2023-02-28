const CampaignService = require("../services/CampaignService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  console.log('query.condtions :>> ', query.conditions);
  console.log('query.condtions.length :>> ', query.conditions.length);
  const campaigns = await CampaignService.findAll();
  const data = await CampaignService.create({ username: "c1", email: "asdasd"});
  // query.where('username', '==', 'c1');
  const result = await CampaignService.update(query, { username: 'c2' })
  res.render("campaign", { campigns: campaigns });
};
const getById = async (req, res) => {
  const section = await SectionsService.findById(req.params.id);
  res.render("sections", { section: section });
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
