import { storage } from "./storage"

export const getFile = (input) => {
  const afterGet = (error, data) => {
    if (error) return console.log("getFile error:", error)
    console.log("getFile done:", data)
  }

  const options = {
    Bucket: input.bucket,
    Key: input.fileName,
  }

  return storage.getObject(options, afterGet)
}
