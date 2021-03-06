import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BurgerIngredient from './BurgerIngredient';

const WrapperStyled = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: overlay;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    }

    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }

    @media (min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`;

const propTypes = {
    ingredients: PropTypes.object,
};

const Burger = ({ ingredients }) => {
    const transformIngredients = Object.entries(ingredients)
    .reduce((acc, [key, value]) => [...acc, ...(Array(value).fill(key))], []);

    return (
        <WrapperStyled>
            <BurgerIngredient type='bread-top' />
            {
                transformIngredients.length > 0 
                    ? transformIngredients.map((ingredient, index) => <BurgerIngredient key={ingredient + index} type={ingredient} />)
                    : <p>Please start adding ingredients!</p>
            }
            <BurgerIngredient type='bread-bottom' />
        </WrapperStyled>
    );
};

Burger.propTypes = propTypes;

export default Burger;
