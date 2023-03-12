const notes = require('express').Router();
const { json } = require('express');
const { v4: uuidv4 } = require('uuid');
const { response } = require('.');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fileName = './db/db.json';

notes.get('/', (req, res) => {
    readFromFile(fileName).then((data) => {
        res.json(JSON.parse(data))
    });
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const { isValid, errors } = req.body
    const payload = {
        title: `${title}`,
        text: `${text}`,
        time: Date.now(),
        error_id: uuidv4(),
        errors
    };
    if (!isValid) {
        readAndAppend(payload, fileName);
        res.json('note saved')
    } else {
        res.json({
            message: 'Object is not valid',
            error_id: payload.error_id
        })
    }
})

module.exports = notes;
