import React from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";
import BtnDefault from "./BtnDefault";

const MainBlock = styled.div`
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;

    h3 {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        color: #000000;
        margin-bottom: 15px;
        line-height: 24px;
    }
`;

function Main() {
    return (
        <MainTemplate>
            <MainBlock>
                <div>
                    <h3>임시 메인 페이지</h3>
                    <BtnDefault title="가입하기 페이지로 이동하기" href="/join" />
                    <BtnDefault title="로그인 페이지로 이동하기" href="/login" />
                </div>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;