import React from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";
import BtnDefault from "./BtnDefault";
import axios from "axios";

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

    const fncSendApi = () => {
    axios.post("http://localhost:8080/api/v1/member", {
        username: "test@test.com",
        password: "testPassword!",
    }).catch((error) => {
        // 오류 발생 시 실행
        console.log(">>> error : " + error + " <<<");
    }).then((response) => {
        // 항상 실행
        console.log(">>> response : " + response + " <<<");
    });
    }
    return (
        <MainTemplate>
            <MainBlock>
                <div>
                    <h3>임시 메인 페이지</h3>
                    <BtnDefault title="가입하기 페이지로 이동하기" href="/join" />
                    <BtnDefault title="로그인 페이지로 이동하기" href="/login" />
                    <br />
                    <hr />
                    <br />
                    <h3>API 호출 테스트</h3>
                    <BtnDefault title="/api/v1/member" onClick={fncSendApi}/>
                </div>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;