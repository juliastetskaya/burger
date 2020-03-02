import React from 'react';
import styled from '@emotion/styled';

import Toolbar from './Navigation/Toolbar';

const ContentStyled = styled.main`
    margin-top: 72px;
`;

const Layout = ({children}) => (
    <>
        <Toolbar />
        <ContentStyled>{children}</ContentStyled>
    </>
);

export default Layout;
