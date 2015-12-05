var http = require('http');

var handleRequest = function(request, response) {
    var cycles = 0;
    var cutoff =  Math.random() * 500000000 + 10000000; // do between 100 and 500 million cycles
    while(true){
        if(cycles > cutoff) break;
        cycles++;
    }
    response.writeHead(200);
    response.end("I burned " + cycles + " cycles");
}

var www = http.createServer(handleRequest);
www.listen(8081);