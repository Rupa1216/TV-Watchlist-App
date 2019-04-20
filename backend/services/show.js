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
ShowService.getByGenre = (genre_id) => {
    const sql = `
    SELECT * 
    FROM genres g
    LEFT JOIN shows s
    ON g.id = s.genre_id
    WHERE
    s.genre_id = $[genre_id]
    `
    return db.any(sql, { genre_id });
}

// GET all shows for specific user_id:
ShowService.getByUser = (user_id) => {
    const sql = `
    SELECT * 
    FROM shows s
    LEFT JOIN users u
    ON s.user_id = u.id
    WHERE
    s.user_id = $[user_id]
    `
    return db.any(sql, { user_id });
}

// GET one show
ShowService.read = (id) => {
    const sql = `
    SELECT * 
    FROM shows s
    WHERE
    s.id = $[id]
    `
    return db.oneOrNone(sql, { id });
}

// POST new show
ShowService.create = (title, img_url, user_id, genre_id) => {
    const sql = `
    INSERT INTO shows (title, img_url, user_id, genre_id)
    VALUES ($[title], $[img_url], $[user_id], $[genre_id])
    RETURNING id;
    `;
    return db.one(sql, { title, img_url, user_id, genre_id })
}

module.exports = ShowService;