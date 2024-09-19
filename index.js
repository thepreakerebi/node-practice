const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + './index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end('This is about page');
    } else if (req.url === '/api') {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify({
            "food": "rice",
            "name": "Jollf"
        }));
    } else {
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end('Page not found');
    }

    // res.writeHead(200, {"Content-Type":"text/html"});
    // fs.createReadStream(__dirname + './index.html').pipe(res);
    // res.end("<h1>Hello world!</h1>");
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})