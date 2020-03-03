import React from 'react';
import styled from '@emotion/styled';

const BackdropStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = ({ show, closeHandler }) => show ? <BackdropStyled onClick={closeHandler} /> : null;

export default Backdrop;
