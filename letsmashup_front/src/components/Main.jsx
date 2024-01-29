import React, { useState } from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";
import BtnDefault from "./BtnDefault";
import axios from "axios";

const MainBlock = styled.div`
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;
    text-align: center;
    margin-bottom: 60px;

    h1 {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        color: blue;
        margin-bottom: 15px;
        line-height: 24px;
    }

    h3 {
        margin-top: 20px;
        font-size: 16px;
    }

    .apiInfo {
        text-align: left;
    }
    .apiRes {
        color: red;
        margin-top: 20px;
    }
`;

function Main() {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const fncSendApi = (e) => {
        const sURL = e.target.title;
        console.log(">>> sURL : " + sURL + " <<<");
        axios.post(sURL, {
            username: "test@test.com",
            password: "testPassword!",
        }).catch((error) => {
            // 오류 발생 시 실행
            setError(error + " ");
            console.log(">>> error : " + error + " <<<");
        }).then((response) => {
            // 항상 실행
            setMessage(response + " ");
            console.log(">>> response : " + response + " <<<");
        });
    }
    return (
        <MainTemplate>
            <MainBlock>
                <div>
                    <h1>▶️ 임시 메인 페이지 ◀️</h1>
                    <BtnDefault title="가입하기 페이지로 이동하기" href="/join" />
                    <BtnDefault title="로그인 페이지로 이동하기" href="/login" />
                    <br />
                    <hr />
                    <br />
                    <h1>▶️ API 호출 테스트 ◀️</h1>
                    <h3>회원가입 POST</h3>
                    <BtnDefault title="/api/v1/member" onClick={fncSendApi} />
                    <h3>로그인 POST</h3>
                    <BtnDefault title="/api/v1/memberLogin" onClick={fncSendApi} />
                    <h3>로그아웃 PUT</h3>
                    <BtnDefault title="/api/v1/memberLogout" onClick={fncSendApi} />
                    <h3>아이디찾기 GET</h3>
                    <BtnDefault title="/api/v1/memberIdFind" onClick={fncSendApi} />
                    <h3>비밀번호찾기 GET</h3>
                    <BtnDefault title="/api/v1/memberPassFind" onClick={fncSendApi} />
                    <br />
                    <hr />
                    <br />
                    <h1>▶️ API 호출 정보 ◀️</h1>
                    <div className="apiInfo">
                        <div className="apiRes">
                            <b>error 결과 :</b>
                        </div>
                        <span>{error}</span>
                        <div className="apiRes">
                            <b>message 결과 :</b>
                        </div>
                        <span>{message}</span>
                    </div>
                    <hr/>
                </div>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;