import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
`;

function MainTemplate({ children }) {
    return <MainTemplateBlock>{children}</MainTemplateBlock>;
}

export default MainTemplate;