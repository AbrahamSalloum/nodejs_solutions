const http = require('http')
var url = require('url');

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function(req, res){

  var purl = url.parse(req.url, true);
  var time = new Date(purl.query.iso);

  if (/^\/api\/parsetime/.test(req.url)) {
    var result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    var result = unixtime(time)
  }

  if(result){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else{
    res.writeHead(404)
    res.end()
  }


})

server.listen(process.argv[2])