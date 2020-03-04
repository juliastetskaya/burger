import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from './UI/Button';

const LabelStyled = styled.span`
    text-transform: capitalize;
`;

const PriceStyled = styled.p`
    font-weight: bold;
`;

const StyledSuccessButton = styled(Button)`
    color: #5C9210;
`;

const StyledDangerButton = styled(Button)`
    color: #944317;
`;

const propTypes = {
    ingredients: PropTypes.object,
    purchaseContinued: PropTypes.func,
    purchaseCanceled: PropTypes.func,
    price: PropTypes.number,
};

const OrderSummary = ({ ingredients, purchaseContinued, purchaseCanceled, price }) => (
    <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {Object.entries(ingredients).map(([key, value]) =>
                <li key={key}>
                    <LabelStyled>{key}</LabelStyled>: {value}
                </li>)}
        </ul>
        <PriceStyled>Total Price: {price.toFixed(2)}</PriceStyled>
        <p>Continue to Checkout?</p>
        <StyledDangerButton clicked={purchaseCanceled}>Cancel</StyledDangerButton>
        <StyledSuccessButton clicked={purchaseContinued}>Continue</StyledSuccessButton>
    </>
);

OrderSummary.propTypes = propTypes;

export default OrderSummary;
