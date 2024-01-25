import React from "react";
import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import HeaderTemplate from "./HeaderTemplate";

const JoinFormBlock = styled.div`
    padding: 18px 20px 0px;
    border-top: 2px solid rgb(244, 244, 244);
    position: relative;
    flex: 1 0 100%;

    .form_notice_txt {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        white-space: pre-wrap;
    }

    input {
        box-sizing: border-box;
        border: 1px solid rgb(212, 212, 212);
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 48px;
        padding: 0px 14px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(26, 26, 26);
        outline: none;
    }

    .input_box {
        margin-bottom: 40px;
    }

    .btn_join {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        min-height: 25px;
        width: 100%;
        height: 56px;
        margin: 20px 0 0;
        background: #000000;
        outline: none;
        border: 0;
        border-radius: 2px;
        color: #ffffff;
        font-size: 16px;
        line-height: 56px;
        font-weight: 600;
    }
`;

function JoinFormTemplate() {
    return (
        <MainTemplate>
            <HeaderTemplate />
            <JoinFormBlock>
                <div>
                    <form>
                        <h3 className="form_notice_txt">로그인에 사용할 아이디를 입력해주세요.</h3>
                        <div className="input_box">
                            <input placeholder="아이디 (이메일) 입력" autoCapitalize="none" type="text" name="username" defaultValue={""} />
                        </div>
                        <h3 className="form_notice_txt">로그인에 사용할 비밀번호를 입력해주세요.</h3>
                        <div className="input_box">
                            <input placeholder="비밀번호 입력" autoCapitalize="none" type="password" name="password" defaultValue={""} />
                        </div>
                        <button className="btn_join" type="submit">가입하기</button>
                    </form>
                </div>
            </JoinFormBlock>
        </MainTemplate>
    );
}

export default JoinFormTemplate;