import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const ItemStyled = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;

    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`;

const activeLink = css`
    color: #40A4C8;

    @media (min-width: 500px) {
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        color: white;
        height: 100%;
        padding: 16px 10px;
    }
`;

const LinkStyled = styled.a`
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    ${({active}) => active && activeLink};

    &:hover,
    &:active {
        ${activeLink}
    }

    @media (min-width: 500px) {
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;

        &:hover,
        &:active {
            ${activeLink}
        }
    }
`;

const propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    active: PropTypes.bool,
};

const NavigationItem = ({ children, link, active }) => (
    <ItemStyled>
        <LinkStyled href={link} active={active}>{children}</LinkStyled>
    </ItemStyled>
);

NavigationItem.propTypes = propTypes;

export default NavigationItem;
