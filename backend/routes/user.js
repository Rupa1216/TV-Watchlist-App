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

// GET - READ ALL USERS
userRouter.get('/', (req, res, next) => {

    UserService.getAllUsers()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// POST - CREATE 
userRouter.post('/', (req, res, next) => {
    const { username } = req.body;

    UserService.createUser(username)
        .then(data => {
            res.json({ success: `Created user named ${username} with generated ID: ${data.id}` });
        })
        .catch(err => {
            next(err);
        })
});

module.exports = userRouter;