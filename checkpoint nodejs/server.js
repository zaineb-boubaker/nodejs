const http = require("http")


const server = http.createServer((req, res) => {
    if (req.url === ("/")) {
    res.end("<h1>Hello Node!!!!</h1>\n");
}
})

server.listen(3000, (err) => {
    if (err) throw err;
    console.log("server is up running on port 3000");
})