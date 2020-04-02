const fs = require('fs')


function getitems(dirname, ext, callback){

	file = fs.readdir(dirname, "utf8", function (error, data){
	if(error){
		return callback(error, null)
	} else {
		var cc = []
		rr = '(.*)\.'+ext+"$"
		for(var i = 0; i < data.length; i++){
			if(data[i].match(rr)){
				cc.push(data[i])
			}
		}
		callback(null, cc)
	}

	})
}

module.exports  = getitems
