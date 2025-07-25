// imports
import path from "node:path"
import fs from "node:fs/promises"

export const getData = async (abPath) => {
  // get path to data
  const pathToData = path.join(abPath, "data", "data.js")
  
  // get data from file
  const spookData = await fs.readFile(pathToData)

  return JSON.parse(spookData)
}