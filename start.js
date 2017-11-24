const express = require('express')

const app = express()
const path = require('path')
const io = require('socket.io')

const Chat = require('./app.js')

app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running 👉  ${server.address().port}`)
})

const chatIO = io(server)
chatIO.on('connection', (socket) => {
  Chat.initChat(chatIO, socket)
})
