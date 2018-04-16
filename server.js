'use strict';
// var http = require('http');

// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }).listen(8888);

//database.query('SELECT * FROM hugetable', function(rows) {
//   var result = rows;
// });
// console.log('Hello World');


var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    
    route(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}
exports.start = start;