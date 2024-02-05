/********************************************************************
 * @설명 : 소셜 로그인 임시 콜백 (auth)
 ********************************************************************/

import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { React, useEffect, useState } from "react";
import * as commonFunction from "../scripts/commonFunction";

const AuthBlock = styled.div`
    width: auto;
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;
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
        margin-bottom: 10px;
    }

    .dataDiv {
        width: 100%;
        box-sizing: border-box;
        word-wrap: break-word;
    }
`;

function Auth() {
    const [kakaoData, setKakaoData] = useState(null);
    const [naverData, setNaverData] = useState(null);
    const [loginType, setLoginType] = useState(null);
    const fncGetData = () => {
        setKakaoData(window.location.href.includes('code') && new URL(window.location.href).searchParams.get("code"));
        setNaverData(window.location.href.includes("access_token") && (window.location.href.split("=")[1].split("&")[0]));
        
        if (window.location.href.includes("code")) {
            setLoginType("KAKAO");
        } else if (window.location.href.includes("access_token")) {
            setLoginType("NAVER");
        } else {
            setLoginType("알 수 없음");
        }
    };
    useEffect(() => {
        commonFunction.fncPrintLog("useEffect 호출", "useEffect 호출");
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