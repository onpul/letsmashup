/********************************************************************
 * @설명 : 소셜 로그인 임시 콜백 (auth)
 ********************************************************************/

import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { React, useEffect, useState } from "react";

const AuthBlock = styled.div`
    width: auto;
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;

    .dataDiv {
        width: 100%;
        box-sizing: border-box;
        word-wrap: break-word;
    }
`;

function Auth() {
    const [loginType, setLoginType] = useState(null);
    const [kakaoData, setKakaoData] = useState(null);
    const [naverData, setNaverData] = useState(null);
    const fncGetData = () => {
        setKakaoData(window.location.href.includes('code') && new URL(window.location.href).searchParams.get("code"));
        setNaverData(window.location.href.includes('access_token') && new URL(window.location.href).searchParams.get("access_token"));
        setLoginType(((kakaoData !== null) && (kakaoData !== undefined)) ? "KAKAO" : "NAVER");
    };
    useEffect(() => {
        fncGetData();
    }, []);
    return (
        <MainTemplate>
            <AuthBlock>
                <div className="dataDiv">
                    <h1>소셜 로그인 임시 콜백 (auth)</h1>
                    <hr />
                    <h3>로그인 타입 : </h3>
                    <span>{loginType}</span>
                    <hr />
                    <h3>소셜 로그인 콜백 데이터 : </h3>
                    <span>{loginType === "KAKAO" ? kakaoData : naverData}</span>
                </div>
            </AuthBlock>
        </MainTemplate>
    );
}

export default Auth;