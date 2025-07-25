// imports
import {getData} from "./utils/getData.js"
import { sendRes } from "../utils/sendResponse.js"

// get data
export const handleGetRequest = async (req, res) =>{
  const data = await getData()
  const stringData = JSON.stringify(data)
  sendRes(res, 200, "application/json", stringData)
}

// post data