const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comment');

// GET all comments for specific show_id
commentRouter.get('/:show_id', (req, res, next) => {
    const { show_id } = req.params;

    CommentService.read(show_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// POST new comment
commentRouter.post('/', (req, res, next) => {
    const { comment_body, user_id, show_id } = req.body;

    CommentService.create(comment_body, user_id, show_id)
        .then(data => {
            res.json({ 
                id: data.id 
            });
        })
        .catch(err => {
            next(err);
        })
});

module.exports = commentRouter;