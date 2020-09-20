import React from 'react';
import styled from '@emotion/styled';

const OrderStyled = styled.div`
    width: 100%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`;

const Order = () => (
    <OrderStyled>
        <p>Ingredients: Salad(1)</p>
        <p>Price: <strong>USD 5.45</strong></p>
    </OrderStyled>
);

export default Order;
