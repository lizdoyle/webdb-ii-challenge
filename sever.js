const express = require('express');

const CarRouter = require('./car-router');

const server = express();

server.use(express.json());

server.use('/cars', CarRouter);

server.get('/', (req, res) => {
    res.send('<h2>Cars Backend Database</h2>')
})

module.exports = server;