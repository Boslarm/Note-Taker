const note = require('express').Router();

//helpers
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// Get route for retrieving the notes
note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } =req.body;

    if (req.body) {
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };
        console.log(newNote);
        readAndAppend(newNote, './db/db.json');
        res.json('Success! Note Added.')
    } else {
        res.error('Error, could not add Note');
    }
});

module.exports = note; 