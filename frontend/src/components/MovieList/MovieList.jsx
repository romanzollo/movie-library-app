import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/Movies/actionCreators';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    const handleDeleteBtn = (id) => {
        dispatch(deleteMovie(id));
    };

    return (
        <div className="app-block movie-list">
            <h2>Movie List</h2>
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                <ul>
                    {movies.map((movie, i) => (
                        <li key={movie.id}>
                            <div className="movie-info">
                                {++i}. {movie.title} by{' '}
                                <strong>{movie.director}</strong>
                            </div>
                            <div className="movie-actions">
                                <button
                                    onClick={() => handleDeleteBtn(movie.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;
