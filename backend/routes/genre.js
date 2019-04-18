const express = require('express');
const genreRouter = express.Router();
const GenreService = require('../services/genre');

GenreService.getAllGenres = () => {
    const sql = `
    SELECT * 
    FROM genres
    `
    return db.any(sql);
}

module.exports = genreRouter;