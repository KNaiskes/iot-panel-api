const express = require('express');
const app = express();
const morgan = require('morgan');

const lightRoutes = require('./api/routes/lights');

// Logger
app.use(morgan('dev'));

// Routes
app.use('/lights', lightRoutes);

app.use((req, res, next) => {
    const error = new Error('Error: Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
	error: {
	    message: error.message
	}
    });
});

module.exports = app;
