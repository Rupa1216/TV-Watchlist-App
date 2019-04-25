const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const userRouter = require('./routes/user');
const genreRouter = require('./routes/genre');
const showRouter = require('./routes/show')
const commentRouter = require('./routes/comment')


// MIDDLEWARE NEEDED
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// ROUTES
app.use('/users', userRouter);
app.use('/genres', genreRouter);
app.use('/shows', showRouter);
app.use('/comments', commentRouter);


app.get('/', (req, res) => {
    res.json({'test': true})
})

app.use((err, req, res, next) => {
    res.status(400).json({error: err.toString()});
});

app.listen(3010, () => {
    console.log('listening on port 3010')
})
