const notes = require('express').Router();

notes.get('/', (req, res) => {
    res.json("GET route hit");
})

notes.post('/', (req, res) => {
    res.json("POST route hit");
})

module.exports = notes;
