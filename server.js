//dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

//activate port and add parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);


//route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Error
app.all('*', (req,res) => {
res.status(404).send('Page Not Found');
});

//listen for port
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);