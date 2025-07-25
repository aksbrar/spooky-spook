// import http
import http from "node:http"

// imports
import {serveStatic} from "./utils/serveStatic.js"
import { handleGetRequest } from "./handlers/routeHandler.js"


// port to use
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer(async (req, res) => {
  if(req.url.startsWith("/api")){
    if (req.method==="GET"){
      return await handleGetRequest(req, res)
    }
  }

  // serve static
  else if (!req.url.startsWith("/api")) {
    return await serveStatic(__dirname, res, req)
  }

})

// listen to port
server.listen(port)
