var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.setHeader('content-type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/TileViewer.html');
    res.write(html);
    // fs.createReadStream(__dirname + '/TileViewer.html').pipe(res);
}).listen(1337, '127.0.0.1');