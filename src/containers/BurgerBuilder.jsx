import React, { useState } from 'react';

import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        meat: 0,
        salad: 0,
        bacon: 0,
        cheese: 0,
    });
    const [totalPrice, setTotalPrice] = useState(4);
    const [disabledInfo, setDisabledInfo] = useState({
        meat: true,
        salad: true,
        bacon: true,
        cheese: true,
    })

    const addIngredientHandler = (type) => {
        setIngredients({
            ...ingredients,
            [type]: ingredients[type] + 1,
        });
        setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
        setDisabledInfo({
            ...disabledInfo,
            [type]: false,
        });
    };

    const removeIngredientHandler = (type) => {
        setIngredients({
            ...ingredients,
            [type]: ingredients[type] - 1,
        });
        setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);

        if (ingredients[type] <= 1) {
            setDisabledInfo({
                ...disabledInfo,
                [type]: true,
            });
        }
    };

    return (
        <>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabledInfo={disabledInfo}
                price={totalPrice}
            />
        </>
    );
};

export default BurgerBuilder;
