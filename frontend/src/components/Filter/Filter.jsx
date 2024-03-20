import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    setDirectorFilter,
    setOnlyFavoriteFilter,
    resetFilters,
    selectTitleFilter,
    selectDirectorFilter,
    selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const titleFilter = useSelector(selectTitleFilter);
    const directorFilter = useSelector(selectDirectorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
    const dispatch = useDispatch();

    const handleFilterTitleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleFilterDirectorChange = (e) => {
        dispatch(setDirectorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
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
                <div className="filter-group">
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="small"
                                sx={{
                                    color: '#523634',
                                    '&.Mui-checked': {
                                        color: '#523634',
                                    },
                                }}
                            />
                        }
                        label="Only Favorite"
                        onChange={handleOnlyFavoriteFilterChange}
                        checked={onlyFavoriteFilter}
                    />
                    {/* <label>
                        <input
                            type="checkbox"
                            onChange={handleOnlyFavoriteFilterChange}
                            checked={onlyFavoriteFilter}
                        />
                        Only Favorite
                    </label> */}
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
