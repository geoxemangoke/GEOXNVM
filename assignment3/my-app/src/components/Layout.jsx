import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top: 0px;
        position: relative;
        height: calc(100% - 0px);
        box-sizing: border-box;
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: fixed;
    height: calc(100% - 0px);
    width: 100%;
    padding: 0px;
    overflow-y: scroll;
    @media (min-width: 700px) {
        flex: 1;
        margin-left: 240px;
        height: calc(100% - 0px);
        width: calc(100% - 220px);
    }
`;

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Wrapper>
            <Navigation />
            <Main >{children}</Main >
        </Wrapper>
    </React.Fragment>
    );
};
export default Layout;