const { Schema, SchemaTypes, Model } = require("firefose");
const { String, Date, Boolean} = SchemaTypes;

const OrderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    completedDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    isCampaign: {
      type: Boolean,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
    isRequest: {
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

const OrderModel = new Model("Order", OrderSchema);
module.exports = Order;

