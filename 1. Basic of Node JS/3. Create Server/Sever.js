

const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello Server is created successfully </h1>");
    res.end()
}).listen(8000);










