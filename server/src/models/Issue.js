import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    severity: {
  type: String,
  default: "Low",
},

    location: {
      type: String,
      required: true,
    },

    latitude: {
  type: Number,
},

longitude: {
  type: Number,
},

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },

    supports: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
],

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;