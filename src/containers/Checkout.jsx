import React from 'react';

import CheckoutSummary from '../components/Order/CheckoutSummary';

const Checkout = ({ history }) => {
    const ingredients = {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1,
    }

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
