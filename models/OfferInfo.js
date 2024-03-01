import mongoose from "mongoose";

const OfferInfoSchema = new mongoose.Schema({
  offerName: {
    type: String,
    // required: true,
  },
  offerID: {
    type: String,
    required: true,
  },
  affiliateName: {
    type: String,
  },
  payout: {
    type: String,
  },
  cap: {
    type: String,
  }
});
const OfferInfo = mongoose.models.OfferInfo || mongoose.model("OfferInfo", OfferInfoSchema);

export default OfferInfo;
