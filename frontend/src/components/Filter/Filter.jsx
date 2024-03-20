import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const titleFilter = useSelector(selectTitleFilter);
    const dispatch = useDispatch();

    const handleFilterTitleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <input
                    type="text"
                    placeholder="Filter by title..."
                    onChange={handleFilterTitleChange}
                    value={titleFilter}
                />
            </div>
        </div>
    );
};

export default Filter;
