import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  createdDate: {
    type: Number,
    required: false,
    default: () => Date.now(),
  },

  userName: {
    type: String,
    required: true,
  },

  emailAddress: {
    type: String,
    required: true,
  },

  avatarUrl: {
    type: String,
    required: false,
    default: "",
  },

  points: {
    type: Number,
    required: false,
    default: 0,
  },

  packs: {
    type: [mongoose.Schema.Types.ObjectId],
    required: false,
    default: [],
  },

  library: {
    type: [mongoose.Schema.Types.ObjectId],
    required: false,
    default: [],
  },
})

export const User = mongoose.models.User || mongoose.model("User", UserSchema)
