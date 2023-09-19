import http from 'node:http'

const server = http.createServer((req, res) => {
    res.end('Hello Pablo')
})

server.listen(3333)