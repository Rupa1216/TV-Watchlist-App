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
    SELECT
    s.id,
    s.title,
    s.img_url,
    s.user_id,
    s.genre_id,
    u.username,
    g.genre_name
    FROM
    shows s
    LEFT JOIN users u ON s.user_id = u.id
    LEFT JOIN genres g ON g.id = s.genre_id
    WHERE
    s.user_id = $[user_id]
    `
    return db.any(sql, { user_id });
}

// GET one show by its ID
ShowService.readByID = (id) => {
    const sql = `
    SELECT s.*, u.username, g.genre_name
    FROM shows s
    LEFT JOIN users u
    ON s.user_id = u.id
    LEFT JOIN genres g
    ON s.genre_id = g.id
    WHERE
    s.id = $[id]
    `
    return db.oneOrNone(sql, { id });
}

// GET one show by title
ShowService.readByTitle = (title) => {
    const sql = `
    SELECT s.*, u.username 
    FROM shows s
    LEFT JOIN users u
    ON s.user_id = u.id
    WHERE
    s.title = $[title]
    `
    return db.any(sql, { id });
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