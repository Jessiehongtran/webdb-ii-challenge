const express = require('express');

const server = express();

const db = require('./Data/db-config')

server.use(express.json())

server.get('/', (req,res) => {
    res.send("let's create some data")
})

//READ CARS
server.get('/cars', (req,res)=> {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to retrieve cars'})
        })
})

//READ A CAR WITH ID
server.get('/cars/:id', (req,res) => {
    const {id} = req.params;

    db('cars').where({id}).first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve the car'})
    })
})

//CREATE A CAR
server.post('/cars', (req,res)=> {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({id:ids[0]})
        .then(newCar => {
            res.status(201).json(newCar)
        })
    })
    .catch(err => {
        console.log('POST error', err)
        res.status(500).json({messgae: 'Failed to store data'})
    })
})

//UPDATE A CAR
server.put('/cars/:id', (req,res) => {
    const id = req.params.id;
    const changes = req.body;

    db('cars')
        .update(id, changes)
        .then(car => {
                res.status(200).json({ message: "Car updated" });
            })
        .catch(err => {
                console.log(err);
                res.status(500).json({message: 'Failed to update a car'})
            })

})


//DELETE A CAR
server.delete('/car/:id', (req,res) =>{
    db('cars')
        .remove(req.params.id)
        .then(car => {
                res.status(200).json({ message: "Car deleted" });
              })
        .catch(err => {
                res.status(500).json({message: 'Failed to delete a car'})
            })
        
})













module.exports = server;