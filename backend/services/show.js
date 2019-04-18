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
// GET all shows for specific user_id
// GET one show
// POST new show

module.exports = ShowService;