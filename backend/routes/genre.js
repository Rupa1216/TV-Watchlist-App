const express = require('express');
const genreRouter = express.Router();
const GenreService = require('../services/genre');

// GET - READ ALL GENRES
genreRouter.get('/', (req, res, next) => {

    GenreService.getAllGenres()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = genreRouter;