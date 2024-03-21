import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { addMovie } from '../../redux/slices/movieSlice';
import createMovieWithID from '../../utils/createMovieWithID';
import moviesData from '../../data/movies.json';

import './MovieForm.css';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && director) {
            const newMovie = createMovieWithID({ title, director });
            dispatch(addMovie(newMovie));

            setTitle('');
            setDirector('');
        }
    };

    const handleRandomMovieBtn = () => {
        const randomIndex = Math.floor(Math.random() * moviesData.length);
        const randomMovie = moviesData[randomIndex];

        dispatch(addMovie(createMovieWithID(randomMovie)));
    };

    // добавляем фильм через API
    const handleAddRandomMovieViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-movie');

            if (/* или res.data &&*/ res?.data?.title && res?.data?.director) {
                const newMovie = createMovieWithID(res.data);
                dispatch(addMovie(newMovie));
            }
        } catch (error) {
            console.log('Error fetching random movie via API: ', error);
        }
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
                <button type="button" onClick={handleAddRandomMovieViaAPI}>
                    Add Random via API
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
