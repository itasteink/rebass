import mongoist from "mongoist"

export const db = mongoist(process.env.MONGO_CONNECTION_URL)

const EMPTY_USER = {
  emailAddress: "",
  userName: "",
  packs: [],
  collection: [],
}

export const getUser = async (_id) => {
  return await to(db.users.find({ _id }))
}

export const getPack = async (_id) => {
  return await to(db.packs.find({ _id }))
}

export const getAsset = async (_id) => {
  return await to(db.assets.find({ _id }))
}

export const updateUser = async (_id, updates) => {
  return await to(db.users.update({ _id }, { $set: updates }))
}

export const addPackToUser = async (userName, packId) => {
  return await to(db.users.update({ _id }, { $addToSet: { packs: packId } }))
}

export const removePackFromUser = async (userName, packId) => {
  return await to(db.users.update({ _id }, { $pull: { packs: packId } }))
}

export const createUser = async (user) => {
  return await to(db.users.insert({ _id }, user))
}
