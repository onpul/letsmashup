/********************************************************************
 * @설명 : 메인 템플릿
 ********************************************************************/

import React from "react";
import styled from "styled-components";
import HeaderTemplate from "./HeaderTemplate";
import FooterTemplate from "./FooterTemplate";

const MainTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
`;

function MainTemplate({ children }) {
    return (
        <MainTemplateBlock className="mainBox">
            <HeaderTemplate />
                {children}
            <FooterTemplate />
        </MainTemplateBlock>
    );
}

export default MainTemplate;
