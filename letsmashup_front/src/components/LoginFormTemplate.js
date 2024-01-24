import React from "react";
import styled from "styled-components";

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
        border: #000000;
        cursor: pointer;
        outline: none;
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
                    <button type="submit">로그인하기</button>
                </form>
            </div>
        </LoginFormBlock>
    );
}

export default LoginFormTemplate;