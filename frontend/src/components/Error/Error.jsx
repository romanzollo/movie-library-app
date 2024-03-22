import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectErrorMassage, clearError } from '../../redux/slices/errorSlice';
import { useEffect } from 'react';

const Error = () => {
    const errorMessage = useSelector(selectErrorMassage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            transition={Flip}
        />
    );
};

export default Error;
