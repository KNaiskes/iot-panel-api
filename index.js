const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/api/lights', (req, res) => {
    // List of all lights
});

app.get('/api/lights/:id', (req, res) => {
    // Get one light (by id)
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
