import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    setDirectorFilter,
    selectTitleFilter,
    selectDirectorFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const titleFilter = useSelector(selectTitleFilter);
    const directorFilter = useSelector(selectDirectorFilter);
    const dispatch = useDispatch();

    const handleFilterTitleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleFilterDirectorChange = (e) => {
        dispatch(setDirectorFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        onChange={handleFilterTitleChange}
                        value={titleFilter}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by director..."
                        onChange={handleFilterDirectorChange}
                        value={directorFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;
