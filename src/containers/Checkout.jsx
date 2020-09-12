import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../components/Order/CheckoutSummary';

import ContactData from './ContactData';

const Checkout = ({ history, location, match }) => {
    const params = new URLSearchParams(location.search);
    const ingredients = [...params.entries()].reduce((acc, [ingredient, count]) => ({ ...acc, [ingredient]: +count }), {});

    const handlePurchaseContinued = () => history.replace('/checkout/contact-data');

    const handlePurchaseCanceled = () => history.goBack();

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                purchaseContinued={handlePurchaseContinued}
                purchaseCanceled={handlePurchaseCanceled}
            />
            <Route path={`${match.path}/contact-data`} component={ContactData} />
        </div>
    )
};

export default Checkout;
