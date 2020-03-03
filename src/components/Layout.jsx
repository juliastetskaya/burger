import React from 'react';
import styled from '@emotion/styled';

import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';

const ContentStyled = styled.main`
    margin-top: 72px;
`;

const Layout = ({children}) => (
    <>
        <Toolbar />
        <SideDrawer />
        <ContentStyled>{children}</ContentStyled>
    </>
);

export default Layout;
