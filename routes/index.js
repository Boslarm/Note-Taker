const express = require('express');

const apiRoutes = require('./apiRoutes');

const app = express();

app.use('/notes', apiRoutes);

module.exports = app;