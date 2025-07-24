// import http
import http from "node:http"

// imports
import {serveStatic} from "./utils/serveStatic.js"
import fs from "node:fs/promises"

// port to use
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer( async (req, res) => {
  // index html path
  const htmlFile = await serveStatic(__dirname)

  // read file on that path
  const content = await fs.readFile(htmlFile, "utf8")

  // send file content
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end(content)
  
})

// listen to port
server.listen(port)
