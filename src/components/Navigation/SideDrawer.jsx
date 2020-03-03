import React from 'react';
import styled from '@emotion/styled';

import Logo from '../Logo';
import NavigationItems from './NavigationItems';

const WrapperStyled = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px) {
        display: none;
    }
`;

const StyledLogo = styled(Logo)`
    height: 11%;
`;

const SideDrawer = () => {

    return (
        <WrapperStyled>
            <StyledLogo />
            <nav>
                <NavigationItems />
            </nav>
        </WrapperStyled>
    )
};

export default SideDrawer;
