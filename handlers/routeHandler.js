// imports
import path from "node:path"
import {getData} from "../utils/getData.js"
import { sendRes } from "../utils/sendResponse.js"
import fs from "node:fs/promises"

// get data
export const handleGetRequest = async (req, res) =>{
  const data = await getData()
  const stringData = JSON.stringify(data)
  sendRes(res, 200, "application/json", stringData)
}

// post data
export const handlePostRequest = async (req, res) =>{
  // initiate body
  let body = ""

  // populate body
  req.on("data", (chunk)=>{
    body += chunk
  })

  req.on("end", ()=>{
    try {
      const data = JSON.parse(body)
      sendRes(res, 200, "application/json", "data is received")
      pushData(data)
    } catch (e) {
      console.log(e)
      sendRes(res, 500, "application/json", e)
    }
  })
}

// push data to data.js file
const pushData = async (dataToPass) => {
  // read the existimg data
  const pathToFile = path.join("data", "data.js")
  const existingData = await getData()
  existingData.unshift(dataToPass)

  // stringify data
  const stringifiedData = JSON.stringify(existingData, null, 2)

  // write data to file
  await fs.writeFile(pathToFile, stringifiedData)
}