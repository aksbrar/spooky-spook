// imports
import path from "node:path"
import {sendRes} from "./sendResponse.js"
import fs from "node:fs/promises"

// get path
export const serveStatic = async (dir, res, req) => {
  const publicpath = path.join(dir, "public")
  const filePath = path.join(
    publicpath,
    req.url === "/" ? "index.html" : req.url )
  readContent(filePath, res)
}

// store file with that path
const readContent = async (filePath, res) => {
  const types = {
     ".js": "text/javascript",
     ".css": "text/css",
     ".json": "application/json",
     ".png": "image/png",
     ".jpg": "image/jpeg",
     ".jpeg": "image/jpeg",
     ".gif": "image/gif",
     ".svg": "image/svg+xml"
   }
  
  // extension of file 
  const ext = path.extname(filePath)

  // content type header
  const contentType = types[ext] || "text/html"

  // store file content
  const storedBuffer = await fs.readFile(filePath)

  // send response
  sendRes(res, 200, contentType ,storedBuffer)
}


