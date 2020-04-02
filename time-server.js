const net = require('net')
var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const server = net.createServer(function(s){
	//"YYYY-MM-DD hh:mm"
	const date = new Date()
	YYYY = date.getFullYear()
	MM = date.getMonth()
	DD = `${date.getDate()}`.padStart(2, 0)
	hh = date.getHours()
	mm = date.getMinutes()
	dash = "-"
	colon = ":"

	var datetime = YYYY+dash+months[MM]+dash+DD+" "+hh+colon+mm
	s.write(datetime)
	s.write('\n')
	s.end()
})

server.listen(process.argv[2])
