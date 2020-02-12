const express = require('express');
const app = express();
const morgan = require('morgan');

const lightRoutes = require('./api/routes/lights');

// Logger
app.use(morgan('dev'));

// Routes
app.use('/lights', lightRoutes);

module.exports = app;
