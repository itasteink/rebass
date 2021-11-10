import multiparty from "multiparty"
import { wasabi } from "./../../database/wasabi"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function uploadAssets(request, response) {
  const form = new multiparty.Form()

  form.on("part", (part) => {
    if (!part.filename) {
      console.log("NO FILENAME", part)
      return
    }

    const options = {
      bucket: "rebass",
      fileName: part.filename,
      content: part,
    }

    wasabi.saveFile(options).then((data) => {
      console.log("uploadAsset", data)
      response.json(data)
    })
  })

  form.parse(request)
}
