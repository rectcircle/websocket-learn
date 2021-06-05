const url = `${location.protocol === 'http:'? 'ws:' : 'wss:'}//${location.host}/ws`
const ws = new WebSocket(url)

window.ws = ws

ws.onmessage = function (message) {
	console.log(`received: ${message.data}`)
}

ws.onopen = function (message) {
	ws.send('hello world')
}

