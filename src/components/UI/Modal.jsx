import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';

const ModalStyled = styled.div`
    transform: ${({show}) => show ? 'translateY(0)' : 'translateY(-100vh)'};
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;

    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`;

const propTypes = {
    children: PropTypes.node,
    show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),
    closeHandler: PropTypes.func,
};

const Modal = ({ children, show, closeHandler }) => useMemo(() => (
    <>
        <Backdrop show={show} closeHandler={closeHandler} />
        <ModalStyled show={show}>{children}</ModalStyled>
    </>
), [show, children, closeHandler]);

Modal.propTypes = propTypes;

export default Modal;
