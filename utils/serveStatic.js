// imports
import path from "node:path"

export const serveStatic = async (dir) => {
  const filePath = path.join(dir, "public", "index.html")
  return filePath
}