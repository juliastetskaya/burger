import React from 'react';
import styled from '@emotion/styled';

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

`;

const Toolbar = () => (
    <HeaderStyled>
        <div>MENU</div>
        <div>LOGO</div>
        <NavStyled>
            ...
        </NavStyled>
    </HeaderStyled>
);

export default Toolbar;
