import express from 'express'
import { Server } from 'socket.io';
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3001;
const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', () => {
    console.log("Tenemos conecion perror")
})

app.get(`/`, (req, res) => {
    res.sendFile(process.cwd() + '/cliente/index.html')
})

server.listen(port, () => {
    console.log(`http://localhost:${port}`)
})