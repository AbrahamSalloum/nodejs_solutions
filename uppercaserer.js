const http = require("http")
const map = require("through2-map")

http.createServer(function(req, res){
	if(req.method !="POST"){
		return console.log("not a POST")
	}

	req.pipe(map(function(c){
		return c.toString().toUpperCase()
	})).pipe(res)

}).listen(process.argv[2])
