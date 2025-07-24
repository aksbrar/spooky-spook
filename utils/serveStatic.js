// imports
import path from "node:path"
import {sendRes} from "./sendResponse.js"
import fs from "node:fs/promises"

// get path
export const serveStatic = async (dir, res) => {
  const filePath = path.join(dir, "public", "index.html")
  readContent(filePath, res)
}

// store file with that path
const readContent = async (path, res) => {
  const storedBuffer = await fs.readFile(path)
  sendRes(res, 200, "text/html",storedBuffer)
}


