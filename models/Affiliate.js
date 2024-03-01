import mongoose from "mongoose";

const AffiliateSchema = new mongoose.Schema({
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
const Affiliate = mongoose.models.Affiliate || mongoose.model("Affiliate", AffiliateSchema);

export default Affiliate;
