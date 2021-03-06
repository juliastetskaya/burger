import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const WrapperStyled = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    @media (min-width: 500px) {
        display: none;
    }
`;

const BarStyled = styled.div`
    width: 90%;
    height: 4px;
    border-radius: 2px;
    background-color: white;
`;

const propTypes = {
    clickHandler: PropTypes.func,
};

const DrawerToggle = ({ clickHandler }) => (
    <WrapperStyled onClick={clickHandler}>
        <BarStyled />
        <BarStyled />
        <BarStyled />
    </WrapperStyled>
);

DrawerToggle.propTypes = propTypes;

export default DrawerToggle;
