// https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4
const http = require('http')
const express = require('express')
const WebSocket = require('ws');

const port = 3000

// init http server
const app = express()
app.use(express.static('public'))

// init websocket server
const server = http.createServer(app)
const websocketServer = new WebSocket.Server({
	server: server,
	path: "/ws",
})
websocketServer.on('connection', (ws) => {

	ws.send('connection success message')

	ws.on('message', (message) => {
		console.log('received: %s', message);
		ws.send(message)
	})
})

// start server
server.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})

