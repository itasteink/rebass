require("dotenv").config()

import { getFile } from "./getFile"
import { saveFile } from "./saveFile"

export const wasabi = { getFile, saveFile }
