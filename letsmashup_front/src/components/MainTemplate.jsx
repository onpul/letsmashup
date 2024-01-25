import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from './HeaderTemplate';

const MainTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
`;

function MainTemplate({ children }) {
    return <MainTemplateBlock><HeaderTemplate/>{children}</MainTemplateBlock>;
}

export default MainTemplate;