import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Burger from '../Burger';
import { DangerButton, SuccessButton } from '../UI/Button';


const CheckoutSummaryStyled = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;

    @media (max-width: 600px) {
        width: 500px;
    }
`;

const BurgerWrapperStyled = styled.div`
    width: 100%;
    margin: auto;
`;

const propTypes = {
    ingredients: PropTypes.object,
}

const CheckoutSummary = ({ ingredients }) => (
    <CheckoutSummaryStyled>
        <h1>We hope it tastes well!</h1>
        <BurgerWrapperStyled>
            <Burger ingredients={ingredients} />
        </BurgerWrapperStyled>
        <DangerButton>CANCEL</DangerButton>
        <SuccessButton>CONTINUE</SuccessButton>
    </CheckoutSummaryStyled>
);

CheckoutSummary.propTypes = propTypes;

export default CheckoutSummary;
