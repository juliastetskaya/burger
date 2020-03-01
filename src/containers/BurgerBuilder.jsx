import React, { useState } from 'react';
import Burger from '../components/Burger';

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
            <div>Build Controls</div>
        </>
    );
};

export default BurgerBuilder;
