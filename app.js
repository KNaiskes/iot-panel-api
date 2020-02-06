const express = require('express');
const app = express();

const lightRoutes = require('./api/routes/lights');

app.use('/lights', lightRoutes);

module.exports = app;
