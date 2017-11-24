let io
let chatSocket

exports.initChat = (sio, socket) => {
  io = sio
  chatSocket = socket

  // register event handler
  io.on('connection', handleConnection)
}

function handleConnection() {
  console.log('a user connected')
}

