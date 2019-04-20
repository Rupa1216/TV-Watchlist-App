const express = require('express');
const showRouter = express.Router();
const ShowService = require('../services/show');

// GET all shows
showRouter.get('/all', (req, res, next) => {

    ShowService.getAllShows()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// GET all shows for specific genre_id 
showRouter.get('/bygenre/:genre_id', (req, res, next) => {
    const { genre_id } = req.params;

    ShowService.getByGenre(genre_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// GET all shows for specific user_id 
showRouter.get('/byuser/:user_id', (req, res, next) => {
    const { user_id } = req.params;

    ShowService.getByUser(user_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// GET one show 
showRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;

    ShowService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = showRouter;