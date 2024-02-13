/********************************************************************
 * @설명 : 임시 메인
 ********************************************************************/

import React, { useState } from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";
import BtnDefault from "./BtnDefault";
import axios from "axios";
import * as commonFunction from "../scripts/commonFunction";

const MainBlock = styled.div`
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;
    text-align: center;
    margin-bottom: 60px;
    box-sizing: border-box;

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
    const [url, setUrl] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const fncSendApi = (e) => {
        commonFunction.fncCallAPI();
        const sURL = e.target.title;
        setUrl(sURL);
        axios
            .post(sURL, {
                username: "test@test.com",
                password: "testPassword!",
            })
            .catch((error) => {
                // 오류 발생 시 실행
                setError(error + " ");
            })
            .then((response) => {
                // 항상 실행
                setResponse(response + " ");
            });
    };
    
    // const fncGet29Data = () => {
    //     axios.get().then((response) => {
    //         debugger;
    //         console.log(response);
    //     }).catch((error) => {
    //         debugger;
    //         console.log(error);
    //     });
    // };

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
                    <h3>회원가입 (POST)</h3>
                    <BtnDefault title="/api/v1/member" onClick={fncSendApi} />
                    <h3>로그인 (POST)</h3>
                    <BtnDefault title="/api/v1/memberLogin" onClick={fncSendApi} />
                    <h3>로그아웃 (PUT)</h3>
                    <BtnDefault title="/api/v1/memberLogout" onClick={fncSendApi} />
                    <h3>아이디찾기 (GET)</h3>
                    <BtnDefault title="/api/v1/memberIdFind" onClick={fncSendApi} />
                    <h3>비밀번호찾기 (GET)</h3>
                    <BtnDefault title="/api/v1/memberPassFind" onClick={fncSendApi} />
                    <br />
                    <hr />
                    <br />
                    <h1>▶️ 기타 테스트 ◀️</h1>
                    <h3>크롤링</h3>
                    <BtnDefault title="크롤링"/>
                    <br />
                    <hr />
                    <br />
                    <h1>▶️ API 호출 정보 ◀️</h1>
                    <div className="apiInfo">
                        <div className="apiRes">
                            <b>url :</b>
                        </div>
                        <span>{url}</span>
                        <div className="apiRes">
                            <b>error :</b>
                        </div>
                        <span>{error}</span>
                        <div className="apiRes">
                            <b>response :</b>
                        </div>
                        <span>{response}</span>
                    </div>
                    <hr />
                </div>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;
