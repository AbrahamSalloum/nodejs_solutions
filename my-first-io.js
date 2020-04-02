const fs = require('fs')
file = fs.readDir(process.argv[2], "utf8", countDir)


function countDir(error, dir){
	if(error){
		print("error")
	} else {
	console.log(dir)
	}

}
