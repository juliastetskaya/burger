import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const ItemStyled = styled.li`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    align-items: center;
`;

const activeStyles = css`
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;
`;

const LinkStyled = styled.a`
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;
    ${({active}) => active && activeStyles};

    &:hover,
    &:active {
        ${activeStyles}
    }
`;

const NavigationItem = ({ children, link, active }) => (
    <ItemStyled>
        <LinkStyled href={link} active={active}>{children}</LinkStyled>
    </ItemStyled>
);

export default NavigationItem;
