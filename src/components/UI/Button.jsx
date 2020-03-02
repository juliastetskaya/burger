import React from 'react';
import styled from '@emotion/styled';

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

const Button = ({ children, clicked, className }) =>
    <ButtonStyled onClick={clicked} className={className}>{children}</ButtonStyled>;

export default Button;
