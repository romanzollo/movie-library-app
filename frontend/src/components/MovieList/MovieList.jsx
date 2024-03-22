import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import {
    deleteMovie,
    toggleFavorite,
    selectMovies,
} from '../../redux/slices/movieSlice';
import {
    selectTitleFilter,
    selectDirectorFilter,
    selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector(selectMovies);

    const filterTitle = useSelector(selectTitleFilter);
    const filterDirector = useSelector(selectDirectorFilter);
    const filterOnlyFavorite = useSelector(selectOnlyFavoriteFilter);

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

        const matchesOnlyFavorite = filterOnlyFavorite
            ? movie.isFavorite
            : true;

        return matchesTitle && matchesDirector && matchesOnlyFavorite;
    });

    const handleFavoriteMovie = (id) => {
        dispatch(toggleFavorite(id));
    };

    // функция для подсветки совпадений текста
    const highlightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, 'gi');

        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
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
                                {++i}.{' '}
                                {highlightMatch(movie.title, filterTitle)} by{' '}
                                <strong>
                                    {highlightMatch(
                                        movie.director,
                                        filterDirector
                                    )}
                                </strong>{' '}
                                <span>({movie.source})</span>
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
