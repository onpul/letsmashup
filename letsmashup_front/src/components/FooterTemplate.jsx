/********************************************************************
 * @설명 : 공통 푸터
 ********************************************************************/

import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    position: relative;
    bottom: 0;
    padding: 36px 20px 104px;
    background: #000000;
    font-weight: 400;

    .title {
        display: block;
        position: relative;
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        border-bottom: 1px solid #333232;
    }

    .link {
        overflow: hidden;
        padding-top: 17px;
    }

    a {
        font-weight: 400;
        color: #9b9b9b;
    }
`;

function HeaderTemplate() {
    return (
        <FooterBlock className="footerBox">
            <div className="title">29CM 클론 프로젝트 - 리액트 구현</div>
            <div className="link"><a href="/">🔗 메인으로 이동</a></div>
            <div className="link"><a href="/testMain">🔗 테스트 페이지로 이동</a></div>
        </FooterBlock>
    );
}

export default HeaderTemplate;
