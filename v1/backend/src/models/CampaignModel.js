
const {Schema, SchemaTypes, Model} = require("firefose");
const { String, Boolean, Date, Number} = SchemaTypes;

const CampaignSchema = new Schema({
  campaignId: {
    type: Number,
    required: true,
  },
  imageSource: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
  creatorId: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  createdCountry: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
}, {timestamp: true});

const CampaignModel = new Model("Campaign", CampaignSchema);
module.exports = CampaignModel;
/*const mongoose = require("mongoose");
const ProjectLogger = require("../scripts/logger/CampaignLogger.js");

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
        select: "full_name email profile_image",
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// ProjectSchema.pre("save", (next, doc) => {
//   console.log("Before => ", doc);
//   next();
// });
ProjectSchema.post("save", (doc) => {
  ProjectLogger.log({
    level: "info",
    message: doc,
  });
});

ProjectSchema.plugin(require("mongoose-autopopulate"));
const CampaignModel = mongoose.model("Project", CampaignSchema);
module.exports = CampaignModel;


 */

