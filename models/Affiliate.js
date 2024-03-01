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
  },
  createLink: {
    type: String,
  },
  offerLink: {
    type: String,
  },
  affiliateLink: {
    type: String,
  },
  domain: {
    type: String,
  },
  resultLink: {
    type: String,
  }
});
const Affiliate = mongoose.models.Affiliate || mongoose.model("Affiliate", AffiliateSchema);

export default Affiliate;
