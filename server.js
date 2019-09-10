const express = require('express');

const server = express();

const db = require('./Data/db-config')

server.use(express.json())

server.get('/', (req,res) => {
    res.send("let's create some data")
})

server.get('/cars', (req,res)=> {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to retrieve cars'})
        })
})















module.exports = server;