const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the shit show ')
    }
    if (req.url === '/about') {
        res.end('here is a short history')
    }
    res.end(`
   <h1>opps bitch you did it agian </h1>
   <p>we cant find the page because its hard </p>
   <a href="/">back home bitch</a>
   `)

})

server.listen(1000)


// this shit is broken and doesnt work i need help 
// rhis ?????