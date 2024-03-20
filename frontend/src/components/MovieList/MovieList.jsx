import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import { deleteMovie, toggleFavorite } from '../../redux/Movies/actionCreators';
import {
    selectTitleFilter,
    setDirectorFilter,
} from '../../redux/slices/filterSlice';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector((state) => state.movies);
    const filterTitle = useSelector(selectTitleFilter);
    const filterDirector = useSelector((state) => state.filter.director);
    const dispatch = useDispatch();

    const handleDeleteBtn = (id) => {
        dispatch(deleteMovie(id));
    };

    const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title
            .toLowerCase()
            .includes(filterTitle.toLowerCase());

        const matchesDirector = movie.director
            .toLowerCase()
            .includes(filterDirector.toLowerCase());

        return matchesTitle && matchesDirector;
    });

    const handleFavoriteMovie = (id) => {
        dispatch(toggleFavorite(id));
    };

    return (
        <div className="app-block movie-list">
            <h2>Movie List</h2>
            {movies.length === 0 ? (
                <p>No movies found</p>
            ) : (
                <ul>
                    {filteredMovies.map((movie, i) => (
                        <li key={movie.id}>
                            {movie.poster ? (
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                            ) : (
                                ''
                            )}
                            <div className="movie-info">
                                {++i}. {movie.title} by{' '}
                                <strong>{movie.director}</strong>
                            </div>
                            <div className="movie-actions">
                                <span
                                    className="favorite-icon"
                                    onClick={() =>
                                        handleFavoriteMovie(movie.id)
                                    }
                                >
                                    {movie.isFavorite ? (
                                        <BsBookmarkCheckFill />
                                    ) : (
                                        <BsBookmarkCheck />
                                    )}
                                </span>
                                <button
                                    type="button"
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
