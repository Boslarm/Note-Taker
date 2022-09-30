//dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');


//activate port and add parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
















//listen for port
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);