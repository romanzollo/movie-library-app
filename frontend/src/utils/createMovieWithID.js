import { v4 as uuidv4 } from 'uuid';

const createMovieWithID = (movie) => {
    return {
        ...movie,
        id: uuidv4(),
        isFavorite: false,
    };
};

export default createMovieWithID;
