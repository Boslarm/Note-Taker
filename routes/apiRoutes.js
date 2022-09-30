const note = require('express').Router();

//helpers
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid'); //givs each note a unique generated id

// Get route for retrieving the notes
note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
//get data from front end
note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } =req.body;

    if (req.body) {
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };
        //save note to db
        console.log(newNote);
        readAndAppend(newNote, './db/db.json'); //add data to array in db
        res.json('Success! Note Added.')
    } else {
        res.error('Error, could not add Note');
    }
});

//delete data from db and display deletion on front end
note.delete('/:id', (req, res) => {
    const Id = req.params.id;
    readFromFile('./db/db.json') //read saved notes
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.id !== Id); //filter out old note and create new array with other notes
        writeToFile('./db/db.json', result); //save that array
        res.json(`Note ${Id} deleted`);
    });
});

module.exports = note;