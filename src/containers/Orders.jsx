import React, { useState, useEffect } from 'react';

import Order from '../components/Order';
import axios from '../axios';
import withErrorHandler from '../hoc/withErrorHandler';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('orders.json')
            .then(({ data }) => {
                setOrders(Object.keys(data).reduce((acc, key) => [...acc, { ...data[key], id: key }], []));
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {
                orders?.map(({ id, ingredients, price }) => (
                    <Order key={id} ingredients={ingredients} price={price} />
                ))
            }
        </div>
    );
};

export default withErrorHandler(Orders, axios);
