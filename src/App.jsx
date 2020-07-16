import React from 'react';

import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import CheckoutSummary from './containers/Checkout';

const App = () => (
    <Layout>
        <BurgerBuilder />
        <CheckoutSummary />
    </Layout>
);

export default App;
