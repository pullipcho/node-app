const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + "\n");
    response.end("Your CPU is " + os.cpus()[0].model + "\n");
    response.end("Your OS is " + os.platform() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
