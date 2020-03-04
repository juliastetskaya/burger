import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import burgerLogo from '../assets/images/burger-logo.png';

const WrapperStyled = styled.div`
    background-color: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
`;

const ImageStyled = styled.img`
    height: 100%;
`;

const propTypes = {
    className: PropTypes.string,
};

const Logo = ({ className }) => (
    <WrapperStyled className={className}>
        <ImageStyled src={burgerLogo} alt="burger logo" />
    </WrapperStyled>
);

Logo.propTypes = propTypes;

export default Logo;
