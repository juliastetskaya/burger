import React, { useState, useEffect } from 'react';

import Modal from '../components/UI/Modal';


const withErrorHandler = (WrapperComponent, axios) => (props) => {
    const [error, setError] = useState(null);

    const responseInterceptor = axios.interceptors.response.use(
        response => response,
        error => setError(error)
    );

    const requestInterceptor = axios.interceptors.request.use(request => {
        setError(null);
        return request;
    });


    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        }
    }, [responseInterceptor, requestInterceptor]);

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
