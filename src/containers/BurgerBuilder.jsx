import React, { useState, useEffect, useCallback } from 'react';

import axios from '../axios';
import withErrorHandler from '../hoc/withErrorHandler';
import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/OrderSummary';
import Spinner from '../components/UI/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const BurgerBuilder = ({ history }) => {
    const [ingredients, setIngredients] = useState({});
    const [totalPrice, setTotalPrice] = useState(4);
    const [disabledInfo, setDisabledInfo] = useState({
        meat: true,
        salad: true,
        bacon: true,
        cheese: true,
    });
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const updatePurchasable = useCallback(() => {
        const sum = Object.values(ingredients).reduce((acc, value) => acc + value, 0);
        setPurchasable(sum > 0);
    }, [ingredients]);

    const updateDisabledInfo = useCallback(() => {
        const updatedInfo = Object.entries(ingredients).reduce((acc, [type, value]) => ({
            ...acc,
            [type]: value <= 0,
        }), {});
        setDisabledInfo(updatedInfo);
    }, [ingredients]);

    useEffect(() => {
        updatePurchasable();
        updateDisabledInfo();
    }, [updatePurchasable, updateDisabledInfo]);

    useEffect(() => {
        axios.get('ingredients.json')
            .then(response => setIngredients(response.data))
            .catch(error => console.error(error));
    }, []);

    const addIngredientHandler = (type) => {
        setIngredients({
            ...ingredients,
            [type]: ingredients[type] + 1,
        });
        setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
    };

    const removeIngredientHandler = (type) => {
        setIngredients({
            ...ingredients,
            [type]: ingredients[type] - 1,
        });
        setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    };

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    };

    const purchaseContinueHandler = () => {
        const queryString = Object.keys(ingredients)
            .reduce((acc, ingredient) => [
                ...acc,
                `${encodeURIComponent(ingredient)}=${encodeURIComponent(ingredients[ingredient])}`
            ], [])
            .join('&');

        history.push({
            pathname: '/checkout',
            search: `${queryString}&price=${totalPrice.toFixed(2)}`,
        });
    };

    return (
        <>
            <Modal show={purchasing} closeHandler={purchaseCancelHandler}>
                <OrderSummary
                    ingredients={ingredients}
                    purchaseCanceled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler}
                    price={totalPrice}
                />
            </Modal>
            {
                Object.keys(ingredients).length !== 0
                    ? (
                        <>
                            <Burger ingredients={ingredients} />
                            <BuildControls
                                ingredientAdded={addIngredientHandler}
                                ingredientRemoved={removeIngredientHandler}
                                disabledInfo={disabledInfo}
                                price={totalPrice}
                                purchasable={purchasable}
                                purchaseHandler={purchaseHandler}
                            />
                        </>
                    )
                    : <Spinner />
            }
        </>
    );
};

export default withErrorHandler(BurgerBuilder, axios);
