import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Logo from '../../Logo';
import NavigationItems from '.././NavigationItems';
import Backdrop from '../../UI/Backdrop';

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
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-100%)'};

    @media (min-width: 500px) {
        display: none;
    }
`;

const StyledLogo = styled(Logo)`
    height: 11%;
    margin-bottom: 32px;
`;

const propTypes = {
    isShown: PropTypes.bool,
    closeHandler: PropTypes.func,
};

const SideDrawer = ({ isShown, closeHandler }) => (
    <>
        <Backdrop show={isShown} closeHandler={closeHandler} />
        <WrapperStyled show={isShown}>
            <StyledLogo />
            <nav>
                <NavigationItems />
            </nav>
        </WrapperStyled>
    </>
);

SideDrawer.propTypes = propTypes;

export default SideDrawer;
