import React from 'react';
import styled from '@emotion/styled';

const LabelStyled = styled.span`
    text-transform: capitalize;
`;

const OrderSummary = ({ ingredients }) => (
    <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {Object.entries(ingredients).map(([key, value]) =>
                <li key={key}>
                    <LabelStyled>{key}</LabelStyled>: {value}
                </li>)}
        </ul>
        <p>Continue to Checkout?</p>
    </>
);

export default OrderSummary;
