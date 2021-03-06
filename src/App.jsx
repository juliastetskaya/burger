import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';

const App = () => (
    <Layout>
        <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
        </Switch>
    </Layout>
);

export default App;
