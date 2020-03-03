import React, {useState} from 'react';
import styled from '@emotion/styled';

import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';

const ContentStyled = styled.main`
    margin-top: 72px;
`;

const Layout = ({children}) => {
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

export default Layout;
