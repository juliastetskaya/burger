import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import CheckoutSummary from './containers/Checkout';

const App = () => (
    <Layout>
        <Switch>
            <Route path="/checkout" component={CheckoutSummary} />
            <Route path="/" exact component={BurgerBuilder} />
        </Switch>
    </Layout>
);

export default App;
