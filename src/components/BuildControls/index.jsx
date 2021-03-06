import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BuildControl from './BuildControl';

const WrapperStyled = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

const OrderButtonStyled = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
    text-transform: uppercase;

    &:hover,
    &:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    &:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }

    &:not(:disabled) {
        animation: enable 0.3s linear;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const PriceStyled = styled.span`
    font-weight: bold;
`;

const CONTROLS = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const propTypes = {
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    disabledInfo: PropTypes.object,
    price: PropTypes.number,
    purchasable: PropTypes.bool,
    purchaseHandler: PropTypes.func,
}

const BuildControls = ({
    ingredientAdded,
    ingredientRemoved,
    disabledInfo,
    price,
    purchasable,
    purchaseHandler,
 }) => (
    <WrapperStyled>
        <p>Current Price: <PriceStyled>{price.toFixed(2)}</PriceStyled></p>
        {
            CONTROLS.map(({ label, type }) => <BuildControl
                key={label}
                label={label}
                added={() => ingredientAdded(type)}
                removed={() => ingredientRemoved(type)}
                disabled={disabledInfo[type]}
            />)
        }
        <OrderButtonStyled
            disabled={!purchasable}
            onClick={purchaseHandler}
        >
            Order now
        </OrderButtonStyled>
    </WrapperStyled>
);

BuildControls.propTypes = propTypes;

export default BuildControls;
