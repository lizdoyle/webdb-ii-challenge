const express = require('express');

const db = require('./data/dbConfig');

const router = express.Router();

//working
router.get('/', (req, res) => {
    db.select('*').from('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({error: "Error accessing the cars from the cars database"})
        })

});

//working
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('cars').where({id}).first()
        .then(car => {
            if (account) {
                res.status(200).json(car);
            }
            else {
                res.status(404).json({message: "No car found with specified id"})
            }
        })
        .catch(err => {
            res.status(500).json({error: "Cannot locate car in cars database"})
        })

});

//working
router.post('/', (req, res) => {

    db.insert(req.body, 'id') 
        .into('cars')
            .then(ids => {
                    res.status(200).json(ids);
            })
            .catch(err => {
                res.status(500).json({error: "Unable to insert into cars database"})
            })
});


// working 
router.put('/:id', (req, res) => {

    const {id} = req.params;
    const changes = req.body;

    db('cars')
    .where({id})
    .update(changes)
        .then(count => { //count = how many are updated
                res.status(200).json(count);
        
        })
        .catch(err => {
            res.status(500).json({error: "Unable to update the car"})
        })

});


//working 
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    db('cars').where({id}).delete()
    .then(count => { //count = how many are deleted
        res.status(200).json(count);

    })
    .catch(err => {
        res.status(500).json({error: "Unable to delete the car"})
    }) 

});



module.exports = router;