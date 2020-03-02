import React from 'react';
import styled from '@emotion/styled';

import burgerLogo from '../assets/images/burger-logo.png';

const WrapperStyled = styled.div`
    background-color: white;
    padding: 8px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 5px;
`;

const ImageStyled = styled.img`
    height: 100%;
`;

const Logo = () => (
    <WrapperStyled>
        <ImageStyled src={burgerLogo} alt="burger logo" />
    </WrapperStyled>
);

export default Logo;
