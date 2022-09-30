//re quire express
const express = require('express');

//connect api routes
const apiRoutes = require('./apiRoutes');

const app = express();

//connect notes html to route
app.use('/notes', apiRoutes);

module.exports = app;