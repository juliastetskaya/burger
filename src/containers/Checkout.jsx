import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../components/Order/CheckoutSummary';

import ContactData from './ContactData';

const Checkout = ({ history, location, match }) => {
    const [ingredients, setIngredients] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setPrice([...params.entries()].filter(([ingredient, _]) => ingredient === 'price')?.[0]?.[1]);

        const filteredParams = [...params.entries()].filter(([ingredient, _]) => ingredient !== 'price');
        const ingredients = filteredParams.reduce((acc, [ingredient, count]) => ({ ...acc, [ingredient]: +count }), {});

        setIngredients(ingredients);
    }, []);

    const handlePurchaseContinued = () => history.replace('/checkout/contact-data');

    const handlePurchaseCanceled = () => history.goBack();

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                purchaseContinued={handlePurchaseContinued}
                purchaseCanceled={handlePurchaseCanceled}
            />
            <Route
                path={`${match.path}/contact-data`}
                render={() => <ContactData ingredients={ingredients} price={price}/>}
            />
        </div>
    )
};

export default Checkout;
