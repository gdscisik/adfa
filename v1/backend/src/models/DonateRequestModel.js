const { Schema, SchemaTypes, Model } = require("firefose");
const { String, Date, Boolean, Number} = SchemaTypes;

const DonateRequestSchema = new Schema(
  {
    donateRequestId: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    creatorId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    requestTitle: {
      type: String,
      required: true,
    },
    requestDescription: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
      required: true,
    },
    donatorId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
/* RequestSchema.post("save", (doc) => {
  SectionLogger.log({
    level: "info",
    message: doc,
  });
}); */

const DonateRequestModel = new Model("DonateRequest", DonateRequestSchema);
module.exports = DonateRequestModel;

