const server = require('./server')

const port = process.env.PORT || 5003
server.listen(port, ()=> console.log(`Magic is happening on port ${port}`))