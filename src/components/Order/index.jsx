import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler';

const OrderStyled = styled.div`
    width: 80%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`;

const Order = () => {
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
        <OrderStyled>
            <p>Ingredients: Salad(1)</p>
            <p>Price: <strong>USD 5.45</strong></p>
        </OrderStyled>
    );
};

export default withErrorHandler(Order, axios);
