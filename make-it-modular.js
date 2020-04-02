const getitems = require('./mymodule.js')

var dir = process.argv[2]
var ext = process.argv[3]

getitems(dir, ext, function(err, data){
	if(err){
		console.log(err)
	} else {
		for(i=0; i<data.length; i++){
			console.log(data[i])
		}
	}

})
