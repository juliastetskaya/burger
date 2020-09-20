import React, { useState, useEffect } from 'react';

import Order from '../components/Order';
import axios from '../axios';
import withErrorHandler from '../hoc/withErrorHandler';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('orders.json')
            .then(response => {
                setOrders(Object.values(response.data));
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Order />
            <Order />
        </div>
    );
};

export default withErrorHandler(Orders, axios);
