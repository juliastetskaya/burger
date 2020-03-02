import React from 'react';
import styled from '@emotion/styled';

import Button from './UI/Button';

const LabelStyled = styled.span`
    text-transform: capitalize;
`;

const StyledSuccessButton = styled(Button)`
    color: #5C9210;
`;

const StyledDangerButton = styled(Button)`
    color: #944317;
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
        <StyledDangerButton>Cancel</StyledDangerButton>
        <StyledSuccessButton>Continue</StyledSuccessButton>
    </>
);

export default OrderSummary;
