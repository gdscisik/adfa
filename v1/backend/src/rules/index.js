const createRules = require('firebase-rules');

createRules({
  ...require('./modules/CampaignRules'),
}, 'database.rules.json');
