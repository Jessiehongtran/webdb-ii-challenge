const express = require('express');

const server = express();

const db = require('./Data/db-config')

server.use(express.json())

server.get('/', (req,res) => {
    res.send("let's create some data")
})
















module.exports = server;