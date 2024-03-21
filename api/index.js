const express = require('express');
const cors = require('cors');
const moviesData = require('./data/movies.json');

const app = express();

app.use(cors());

function getRandomBook() {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    const randomBook = moviesData[randomIndex];
    return randomBook;
}

app.get('/random-movie', (req, res) => {
    res.json(getRandomBook());
});

app.get('/random-movie-delayed', (req, res) => {
    setTimeout(() => {
        res.json(getRandomBook());
    }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
