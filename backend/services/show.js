const { db } = require('../db');
const ShowService = {};

// GET all shows
ShowService.getAllShows = () => {
    const sql = `
    SELECT * 
    FROM shows
    `
    return db.any(sql);
}

// GET all shows for specific genre_id
ShowService.byGenreID = (genre_id) => {
    const sql = `
    SELECT * 
    FROM genres g
    LEFT JOIN shows s
    ON g.id = s.genre_id
    WHERE
    s.genre_id = $[genre_id]
    `
    return db.one(sql, { genre_id });
}

// GET all shows for specific user_id
// GET one show
// POST new show

module.exports = ShowService;