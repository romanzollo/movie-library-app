import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addMovie } from '../../redux/Movies/actionCreators';
import moviesData from '../../data/movies.json';
import { v4 as uuidv4 } from 'uuid';

import './MovieForm.css';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && director) {
            const newMovie = { title, director, id: uuidv4() };
            dispatch(addMovie(newMovie));

            setTitle('');
            setDirector('');
        }
    };

    const handleRandomMovieBtn = () => {
        const randomIndex = Math.floor(Math.random() * moviesData.length);
        const randomMovie = moviesData[randomIndex];
        const randomMovieWithID = {
            ...randomMovie,
            id: uuidv4(),
        };

        dispatch(addMovie(randomMovieWithID));
    };

    return (
        <div className="app-block movie-form">
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                    />
                </div>
                <div>
                    <label htmlFor="director">Director:</label>
                    <input
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        id="director"
                    />
                </div>
                <button type="submit">Add Movie</button>
                <button type="button" onClick={handleRandomMovieBtn}>
                    Add Random Movie
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
