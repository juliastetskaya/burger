import React from 'react';

import CheckoutSummary from '../components/Order/CheckoutSummary';

const Checkout = ({ history, location }) => {
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
        </div>
    )
};

export default Checkout;
