//dependencies
const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();

//activate port and add parsing
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/apiRoutes')(app);


app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);