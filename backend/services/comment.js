const { db } = require('../db');
const CommentService = {};


// GET all comments for specific show_id
CommentService.read = (id) => {
    const sql = `
    SELECT c.id, c.comment_body, c.user_id, s.title, s.img_url
    FROM comments c
    LEFT JOIN shows s
    ON c.show_id = s.id 
    WHERE
    c.show_id = $[id]
    `
    return db.any(sql, { id });
}

// POST new comment

module.exports = CommentService;