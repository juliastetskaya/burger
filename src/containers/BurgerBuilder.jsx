import React, { useState } from 'react';

import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        meat: 0,
        salad: 0,
        bacon: 0,
        cheese: 0,
    });

    return (
        <>
            <Burger ingredients={ingredients} />
            <BuildControls />
        </>
    );
};

export default BurgerBuilder;
