const express = require('express');

const app = express();

// const port = 3000;

app.use((req, res, next) => {
    res.status(200).json({
	message: 'Test app'
    });
});

module.exports = app;
