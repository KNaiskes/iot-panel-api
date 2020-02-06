const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
	message: 'light - GET request'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
	message: 'lights - GET with id',
	id: id
    });
});


module.exports = router;
