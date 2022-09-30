const path = require('path');

//route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

//Error
app.all('*', (req,res) => {
res.status(404).send('Page Not Found');
});

module.exports = html;