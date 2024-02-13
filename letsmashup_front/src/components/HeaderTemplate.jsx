/********************************************************************
 * @설명 : 공통 헤더
 ********************************************************************/

import React from "react";
import styled from "styled-components";
import mainLogo from "../images/logo_main.png";

const HeaderBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    position: relative;
    z-index: 1;
`;

const LogoBlock = styled.div`
    .main_logo {
        position: absolute;
        top: 16px;
        left: 16px;
        width: 72px;
        height: 18px;
        padding: 0;
    }
`;

function HeaderTemplate() {
    return (
            <HeaderBlock className="headerBox">
                <LogoBlock>
                    <a href="/">
                        <img src={mainLogo} className="main_logo" alt="mainLogo"></img>
                    </a>
                </LogoBlock>
            </HeaderBlock>
    );
}

export default HeaderTemplate;
