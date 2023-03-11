const BaseService = require("./BaseService.js");
const CampaignModel = require("../models/CampaignModel.js");

class CampaignService extends BaseService {
  model = CampaignModel;
}
module.exports = new CampaignService();
