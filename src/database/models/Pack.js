import mongoose from "mongoose"

const PackSchema = new mongoose.Schema({
  createdDate: {
    type: Number,
    required: false,
    default: () => Date.now(),
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
    default: "",
  },

  artworkUrl: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    required: false,
    default: [],
  },

  artist: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  assets: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
})

export const Pack = mongoose.models.Pack || mongoose.model("Pack", PackSchema)
