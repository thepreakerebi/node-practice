const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname + './index.html').pipe(res);
    // res.end("<h1>Hello world!</h1>");
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})