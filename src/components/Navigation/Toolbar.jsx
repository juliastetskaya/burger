import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle';

const HeaderStyled = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

const NavStyled = styled.nav`
    height: 100%;

    @media (max-width: 499px) {
        display: none;
    }
`;

const StyledLogo = styled(Logo)`
    height: 80%;
`;

const propTypes = {
    clickHandler: PropTypes.func,
};

const Toolbar = ({ clickHandler }) => (
    <HeaderStyled>
        <DrawerToggle clickHandler={clickHandler} />
        <StyledLogo />
        <NavStyled>
            <NavigationItems />
        </NavStyled>
    </HeaderStyled>
);

Toolbar.propTypes = propTypes;

export default Toolbar;
