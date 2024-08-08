import express from 'express'
import { Server } from 'socket.io';
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3001;
const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log("a user has connected")

    socket.on('disconnect', () => {
        console.log("an user has disconnected")
    })
    socket.on('chat message', (msg) =>{
        console.log('message: ' + msg)
    })
})

app.get(`/`, (req, res) => {
    res.sendFile(process.cwd() + '/cliente/index.html')
})

server.listen(port, () => {
    console.log(`http://localhost:${port}`)
})