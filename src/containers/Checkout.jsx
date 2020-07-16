import React from 'react';

import CheckoutSummary from '../components/Order/CheckoutSummary';

const Checkout = () => {
    const ingredients = {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1,
    }

    return (
        <div>
            <CheckoutSummary ingredients={ingredients} />
        </div>
    )
};

export default Checkout;
