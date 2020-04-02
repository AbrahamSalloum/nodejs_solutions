const fs = require('fs')
file = fs.readdir(process.argv[2], "utf8", countDir)

function countDir(error, dir){
	if(error){
		print("error")
	} else {
		rr = '(.*)\.'+process.argv[3]+"$"
		for(var i = 0; i < dir.length; i++){
			if(dir[i].match(rr)){
				console.log(dir[i])
			}
		}
	}

}
