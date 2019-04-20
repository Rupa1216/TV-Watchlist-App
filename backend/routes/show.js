const express = require('express');
const showRouter = express.Router();
const ShowService = require('../services/show');

// GET all shows
showRouter.get('/all', (req, res, next) => {

    ShowService.getAllShows()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = showRouter;