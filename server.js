// import http
import http from "node:http"

// imports
import {serveStatic} from "./utils/serveStatic.js"

// port to use
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer((req, res) => {
  res.end(serveStatic(__dirname))
})

// listen to port
server.listen(port)