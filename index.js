const server = require('./sever');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
});