import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const BackdropStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const propTypes = {
    show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),
    closeHandler: PropTypes.func,
};

const Backdrop = ({ show, closeHandler }) => show ? <BackdropStyled onClick={closeHandler} /> : null;

Backdrop.propTypes = propTypes;

export default Backdrop;
