// imports
import path from "node:path"

export const serveStatic = (dir) => {
  const filePath = path.join(dir, "public", "index.html")
  return filePath
}