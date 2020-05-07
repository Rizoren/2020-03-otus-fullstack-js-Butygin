const http = require('http');

http.createServer((req, res) => {
    setTimeout(() => {
        console.log(new Date());
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plant');
        res.end();
    }, 100);
}).listen(3001);