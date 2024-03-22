import { v4 as uuidv4 } from 'uuid';

const createMovieWithID = (movie, source) => {
    return {
        ...movie,
        source,
        id: uuidv4(),
        isFavorite: false,
    };
};

export default createMovieWithID;
