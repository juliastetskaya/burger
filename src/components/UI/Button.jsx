import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    text-transform: uppercase;

    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
`;

const propTypes = {
    children: PropTypes.node,
    clicked: PropTypes.func,
    className: PropTypes.string,
};

const Button = ({ children, clicked, className }) =>
    <ButtonStyled onClick={clicked} className={className}>{children}</ButtonStyled>;

Button.propTypes = propTypes;

export const DangerButton = styled(Button)`
    color: #944317;
`;

export const SuccessButton = styled(Button)`
    color: #5C9210;
`;

export default Button;
