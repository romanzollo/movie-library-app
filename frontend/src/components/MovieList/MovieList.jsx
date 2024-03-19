import { useSelector } from 'react-redux';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector((state) => state.movies);

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
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;
