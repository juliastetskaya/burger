import React, { useState } from 'react';
import Burger from '../components/Burger';

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        meat: 1,
        salad: 2,
        bacon: 1,
        cheese: 2,
    });

    return (
        <>
            <Burger ingredients={ingredients} />
            <div>Build Controls</div>
        </>
    );
};

export default BurgerBuilder;
