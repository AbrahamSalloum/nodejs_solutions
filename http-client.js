const http = require('http')

http.get(process.argv[2], 'utf8', function callback (res){
  res.setEncoding('utf8');
  res.on('data', function (data){
      console.log(data)
  })

})
