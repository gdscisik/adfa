const { Schema, SchemaTypes, Model } = require("firefose");
const { String, Date, Boolean, Number, Array } = SchemaTypes;

const DonateRequestSchema = new Schema(
  {
    donateRequestId: {
      type: Number,
    },
    createdDate: {
      type: Date,
    },
    creatorId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
    },
    imageSource: {
      type: String,
    },
    donatorId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
    isActive: {
      type: Boolean,
    },
    categoryList: {
      type: Array, // TODO array'e cevir
    },
  },
  { versionKey: false, timestamps: true },
);
/* RequestSchema.post("save", (doc) => {
  SectionLogger.log({
    level: "info",
    message: doc,
  });
}); */

const DonateRequestModel = new Model("DonateRequest", DonateRequestSchema);
module.exports = DonateRequestModel;
