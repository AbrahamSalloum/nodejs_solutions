const http = require('http')
const fs = require('fs')
const bl = require('bl')


const server =  http.createServer(function(req, res){
	var readfile = fs.createReadStream(process.argv[3])
	readfile.pipe(bl(function(err, data){
		if(err){
			return console.log(error)
		}
			res.write(data.toString())
			res.end()
	}))	
	
})

server.listen(process.argv[2])
