// import http
import http from "node:http"

// imports
import {serveStatic} from "./utils/serveStatic.js"
import {getData} from "./utils/getData.js"
import { handleGetRequest } from "./handlers/routeHandler.js"


// port to use
const port = 8000

// cwd
const __dirname = import.meta.dirname

// existing data 
const listing = await getData(__dirname)

// create server
const server = http.createServer(async (req, res) => {
  if(req.url.startsWith("/api") && req.method==="GET"){
    handleGetRequest(req, res)
  }

  
  // serve static
  else if (!req.url.startsWith("/api")) {
    return await serveStatic(__dirname, res, req)
  }

})

// listen to port
server.listen(port)
