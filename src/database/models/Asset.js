import mongoose from "mongoose"

const AssetSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },

  artworkUrl: {
    type: String,
    required: true,
  },

  pack: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["sample", "preset", "midi", "wavetable", "noise"],
    required: true,
  },

  createdDate: {
    type: Number,
    required: false,
    default: () => Date.now(),
  },

  cost: {
    type: Number,
    required: false,
    default: 0,
  },
})

export const Asset = mongoose.models.Asset || mongoose.model("Asset", AssetSchema)
