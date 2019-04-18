const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// GET - READ BY USER ID
userRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;

    UserService.getUser(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});


module.exports = userRouter;