import { storage } from "./storage"

export const saveFile = (options) => {
  return new Promise((resolve, reject) => {
    const data = {
      Bucket: options.bucket,
      Body: options.content,
      Key: `assets/${options.fileName}`,
      ContentLength: options.content.byteCount,
      ACL: "public-read",
    }

    storage.putObject(data, (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  })
}
