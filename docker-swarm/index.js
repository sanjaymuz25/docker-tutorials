const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    const hostname = os.hostname();
    res.writeHeader(200, {'Content-type': 'text/plain'});
    res.write(`Hello from ${hostname}`);
    res.end();
});


server.listen(3000, () => {
    console.log('Server started and ready to serve requests');
});