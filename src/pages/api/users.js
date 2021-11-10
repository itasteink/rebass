import { createRouter } from "./../../database/router"
import { Pack } from "../../database/models/Pack"
import { User } from "../../database/models/User"
import { Asset } from "../../database/models/Asset"

const getUserById = async (request, response) => {
  const { userId } = request.query
  const user = await User.findOne({ _id: userId })
  response.json(user)
}

const createUser = async (request, response) => {
  const newUser = await User.create(request.body)
  response.json(newUser)
}

const createPack = async (request, response) => {
  const packData = request.body

  const user = await User.findOne({ _id: packData.artist })
  const assets = packData.assets.map(Asset.create)
  const newAssets = await Promise.all(assets)

  packData.assets = newAssets.map((asset) => {
    asset.artworkUrl = packData.artworkUrl
    return asset
  })

  const newPack = await Pack.create(packData)
  user.packs.push(newPack._id)
  await user.save()

  response.json(newPack)
}

const uploadAssets = async (request, response) => {
  console.log("uploading assets", request.body)
  response.json({ cool: true })
}

export default createRouter({
  GET: { getUserById },
  PUT: { createUser, createPack },
  POST: { uploadAssets },
  DELETE: {},
})
