import React, { useState, useEffect } from 'react';

import Modal from '../components/UI/Modal';


const withErrorHandler = (WrapperComponent, axios) => (props) => {
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.interceptors.response.use(response => response, error => {
            setError(error);
        });
        axios.interceptors.request.use(request => {
            setError(null);
            return request;
        });
    });

    const errorConfirmedHandler = () => {
        setError(null);
    };
    
    return (
        <>
            <Modal
                show={error}
                closeHandler={errorConfirmedHandler}
            >
                {error && error.message}
            </Modal>
            <WrapperComponent {...props} />
        </>
    );
};

export default withErrorHandler;
