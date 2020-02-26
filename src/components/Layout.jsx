import React from 'react';
import styled from '@emotion/styled';

const ContentStyled = styled.main`
    margin-top: 16px;
`;

const Layout = ({children}) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <ContentStyled>{children}</ContentStyled>
    </>
);

export default Layout;
