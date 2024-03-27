import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import {
    addMovie,
    fetchMovie,
    selectIsLoadingViaAPI,
} from '../../redux/slices/movieSlice';
import { setError } from '../../redux/slices/errorSlice';
import createMovieWithID from '../../utils/createMovieWithID';
import moviesData from '../../data/movies.json';

import './MovieForm.css';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && director) {
            const newMovie = createMovieWithID({ title, director }, 'manual');
            dispatch(addMovie(newMovie));

            setTitle('');
            setDirector('');
        } else {
            dispatch(setError('Please enter title and director'));
        }
    };

    const handleRandomMovieBtn = () => {
        const randomIndex = Math.floor(Math.random() * moviesData.length);
        const randomMovie = moviesData[randomIndex];

        dispatch(addMovie(createMovieWithID(randomMovie, 'random')));
    };

    // добавляем фильм через API
    const handleAddRandomMovieViaAPI = () => {
        dispatch(fetchMovie('http://localhost:4000/random-movie-delayed'));
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
                <button
                    type="button"
                    onClick={handleAddRandomMovieViaAPI}
                    disabled={isLoadingViaAPI}
                >
                    {isLoadingViaAPI ? (
                        <>
                            <span>Movie is Loading...</span>
                            <FaSpinner className="spinner" />
                        </>
                    ) : (
                        'Add Random via API'
                    )}
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
