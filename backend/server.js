import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
})