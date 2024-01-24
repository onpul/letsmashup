import React from "react";
import styled from "styled-components";
import logo_sns from "../image/logo_sns.png";

const LoginFormBlock = styled.div`
    margin: 0 auto;
    padding: 0 20px 50px;
    max-width: 100%;

    .title_login {
        margin: 20px 0;
        font-size: 20px;
        color: #000000;
        font-weight: 500;
        text-align: center;
    }

    .form_div {
        padding-top: 16px;
        border-top: 0;
    }

    .form_id {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    input {
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #d4d4d4;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 48px;
        padding: 0 14px;
        font-size: 14px;
        font-weight: 500;
        color: #1a1a1a;
        outline: none;
    }

    button {
        cursor: pointer;
        outline: none;
        border: 0;
    }

    .btn_login {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        min-height: 25px;
        width: 100%;
        height: 56px;
        margin: 20px 0 0;
        background: #000000;
        border-radius: 2px;
        color: #ffffff;
        font-size: 16px;
        line-height: 56px;
        font-weight: 600;
    }

    .button_div {
        margin: 35px 0;
        h3 {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: #000000;
            margin-bottom: 15px;
            line-height: 24px;
        }
    }

    .button_group {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn_kakao_div,
    .btn_naver_div,
    .btn_facebook_div {
        margin-right: 16px;
    }

    .btn_login_kakao {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        min-height: 25px;
        width: 114px;
        height: 44px;
        border-radius: 100px;
        background: #ffde00;
    }

    .btn_kakao_txt {
        margin-left: 9px;
        font-size: 13px;
        line-height: 18px;
        font-weight: 500;
    }

    .btntxt {
        display: none;
    }

    .btn_login_naver {
        display: flex;
        align-items: center;
        min-width: 40px;
        min-height: 25px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: url(${logo_sns}) no-repeat;
        background-size: 191px 93px;
        background-position: 0 -49px;
        vertical-align: top;
    }

    .btn_login_facebook {
        display: flex;
        align-items: center;
        min-width: 40px;
        min-height: 25px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: url(${logo_sns}) no-repeat;
        background-size: 191px 93px;
        background-position: -98px -49px;
        vertical-align: top;
    }

    .btn_login_apple {
        display: flex;
        align-items: center;
        min-width: 40px;
        min-height: 25px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: url(${logo_sns}) no-repeat;
        background-size: 191px 93px;
        background-position: -147px -49px;
        vertical-align: top;
    }
`;

function LoginFormTemplate() {
    return (
        <LoginFormBlock>
            <h2 className="title_login">로그인</h2>
            <div className="form_div">
                <form>
                    <div className="form_id">
                        <input placeholder="아이디 (이메일)" autoCapitalize="none" type="text" name="username"></input>
                    </div>
                    <div className="form_pw">
                        <input placeholder="비밀번호" autoCapitalize="none" type="password" name="password"></input>
                    </div>
                    <button className="btn_login" type="submit">
                        로그인하기
                    </button>
                </form>
                <div className="button_div">
                    <h3>SNS 계정으로 로그인하기</h3>
                    <div className="button_group">
                        <div className="btn_kakao_div">
                            <button className="btn_login_kakao" type="button">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.0294 0 0 3.09858 0 6.92081C0 9.39196 1.68456 11.5603 4.21858 12.7847C4.08072 13.2484 3.33268 15.7676 3.30291 15.9656C3.30291 15.9656 3.285 16.1144 3.38374 16.1711C3.48248 16.2277 3.59862 16.1837 3.59862 16.1837C3.88177 16.1452 6.88214 14.0897 7.40137 13.7327C7.92017 13.8044 8.45446 13.8416 9 13.8416C13.9706 13.8416 18 10.7431 18 6.92081C18 3.09858 13.9706 0 9 0Z" fill="black"></path>
                                </svg>
                                <span className="btn_kakao_txt">빠른 시작</span>
                                <span className="btn_kakao_txt2 btntxt">카카오로 로그인하기</span>
                            </button>
                        </div>
                        <div className="btn_naver_div btn_icon">
                            <button className="btn_login_naver">
                                <span className="btntxt">네이버로 로그인하기</span>
                            </button>
                        </div>
                        <div className="btn_facebook_div btn_icon">
                            <button className="btn_login_facebook">
                                <span className="btntxt">페이스북으로 로그인하기</span>
                            </button>
                        </div>
                        <div className="btn_apple_div btn_icon">
                            <button className="btn_login_apple">
                                <span className="btntxt">Apple로 로그인하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LoginFormBlock>
    );
}

export default LoginFormTemplate;