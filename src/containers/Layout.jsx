import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';

const ContentStyled = styled.main`
    margin-top: 72px;
`;

const propTypes = {
    children: PropTypes.node,
};

const Layout = ({ children }) => {
    const [isShown, setIsShown] = useState(false);

    const toggleHandler = () => {
        setIsShown(!isShown);
    };

    const closeHandler = () => {
        setIsShown(false);
    };

    return (
        <>
            <Toolbar clickHandler={toggleHandler} />
            <SideDrawer isShown={isShown} closeHandler={closeHandler} />
            <ContentStyled>{children}</ContentStyled>
        </>
    );
};

Layout.propTypes = propTypes;

export default Layout;
