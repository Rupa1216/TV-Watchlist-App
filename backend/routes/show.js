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
            console.log('data', data)
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// GET one show by ID
showRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;

    ShowService.readByID(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// GET one show by title
showRouter.get('/bytitle/:title', (req, res, next) => {
    const { title } = req.params;

    ShowService.readByTitle(title)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

// POST new show
showRouter.post('/', (req, res, next) => {
    const { title, img_url, user_id, genre_id } = req.body;

    ShowService.create(title, img_url, user_id, genre_id)
        .then(data => {
            res.json({ success: `Created show called ${title} with generated ID: ${data.id}` });
        })
        .catch(err => {
            next(err);
        })
});

module.exports = showRouter;