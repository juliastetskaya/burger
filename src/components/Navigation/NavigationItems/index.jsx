import React from 'react';
import styled from '@emotion/styled';

import NavigationItem from './NavigationItem';

const NavigationListStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
`;

const NavigationItems = () => (
    <NavigationListStyled>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </NavigationListStyled>
);

export default NavigationItems;
