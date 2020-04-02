const http = require('http')
const bl = require('bl')

const results = []
count = 0

function printall(){
  for(var i = 0 ; i < 3; i++){
    console.log(results[i])
  }
}

function httpget(index){
  http.get(process.argv[2+index], function (response){
    response.pipe(bl(function(err, data){
      if(err){
        return console.log(err)
      }

      results[index] = data.toString()
      count++
      if (count == 3){
        printall()
      }
    }))
  })
}

for(var a = 0 ; a < 3; a++){
  httpget(a)
}
