const EventEmitter = require('events')
var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
	 
	log(message){
		console.log(message)
		this.emit('MessageLogged', {id: 1, url: "http://ok.com"})
	}
}

module.exports = Logger
