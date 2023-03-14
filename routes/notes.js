const notes = require('express').Router();
const { json } = require('express');
const { v4: uuidv4 } = require('uuid');
// const { response } = require('.');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fileName = './db/db.json';

notes.get('/', (req, res) => {
    readFromFile(fileName).then((data) => {
        res.json(JSON.parse(data))
    });
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body
    const payload = {
        title: title,
        text: text,
        time: Date.now(),
        id: uuidv4(),
    };

    readAndAppend(payload, fileName);
    res.json('note saved')

})

module.exports = notes;
