const { db } = require('../db');
const CommentService = {};


// GET all comments for specific show_id
CommentService.read = (show_id) => {
    const sql = `
    SELECT c.id, c.comment_body, c.user_id, s.title, s.img_url
    FROM comments c
    LEFT JOIN shows s
    ON c.show_id = s.id 
    WHERE
    c.show_id = $[show_id]
    `
    return db.any(sql, { show_id });
}

// POST new comment
CommentService.create = (comment_body, user_id, show_id) => {
    const sql = `
    INSERT INTO comments (comment_body, user_id, show_id)
    VALUES ($[comment_body], $[user_id], $[show_id])
    RETURNING id;
    `;
    return db.one(sql, { comment_body, user_id, show_id })
}

module.exports = CommentService;