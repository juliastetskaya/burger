import React from 'react';
import styled from '@emotion/styled';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

const ButtonStyled = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }

    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
`;

const LabelStyled = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const StyledLessButton = styled(ButtonStyled)`
    background-color: #D39952;
    color: white;

    &:hover,
    &:active {  
        background-color: #DAA972;
        color: white;
    }
`;

const StyledMoreButton = styled(ButtonStyled)`
    background-color: #8F5E1E;
    color: white;

    &:hover,
    &:active {  
        background-color: #99703F;
        color: white;
    }
`;

const BuildControl = ({ label, added }) => (
    <WrapperStyled>
        <LabelStyled>{label}</LabelStyled>
        <StyledLessButton>Less</StyledLessButton>
        <StyledMoreButton onClick={added}>More</StyledMoreButton>
    </WrapperStyled>
);

export default BuildControl;
