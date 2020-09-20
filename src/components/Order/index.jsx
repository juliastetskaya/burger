import React from 'react';
import styled from '@emotion/styled';

const OrderStyled = styled.div`
    width: 80%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`;

const IngredientStyled = styled.span`
    text-transform: capitalize;
    display: inline-block;
    margin: 0 8px;
    border: 1px solid #ccc;
    padding: 5px;

    &:hover {
        background-color: #eee;
    }
`;

const Order = ({ ingredients, price }) => (
        <OrderStyled>
            <p>Ingredients: {
                Object.keys(ingredients).map(ingredient => <IngredientStyled>{ingredient} ({ingredients[ingredient]})</IngredientStyled>)
            }</p>
            <p>Price: <strong>USD {price}</strong></p>
        </OrderStyled>
    );

export default Order;
