const express = require('express');

const server = express();

server.use(express.json())

server.get('/', (req,res) => {
    res.send("let's create some data")
})















module.exports = server;