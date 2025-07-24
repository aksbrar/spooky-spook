// import http
import http from "node:http"

// port to use
const port = 8000

// create server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.end('<html><h1>The server is working</h1></html>')
})

// listen to port
server.listen(port)