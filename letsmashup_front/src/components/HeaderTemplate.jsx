import React from "react";
import styled from "styled-components";
import mainLogo from "../image/logo_main.png";

const HeaderBlock = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
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
        <div>
            <HeaderBlock>
                <LogoBlock>
                    <img src={mainLogo} className="main_logo" alt="mainLogo"></img>
                </LogoBlock>
            </HeaderBlock>
        </div>
    );
}

export default HeaderTemplate;