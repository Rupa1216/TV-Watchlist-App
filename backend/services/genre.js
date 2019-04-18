const { db } = require('../db');
const GenreService = {};

GenreService.getAllGenres = () => {
    const sql = `
    SELECT * 
    FROM genres
    `
    return db.any(sql);
}

module.exports = GenreService;