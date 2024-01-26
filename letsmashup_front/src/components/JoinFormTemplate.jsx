import React, { useState } from "react";
import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import BtnDefault from "./BtnDefault";

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

    .join_proc_2 {
        span {
            font-size: 15px;
            margin-left: 10px;
            line-height: 22px;
            font-weight: normal;
        }
    }
`;

/**
 * 다음 프로세스 이동
 */
const fncGoNextProc = () => {

}

// const fncGoJoin = () => {
//     alert("가입하기는 추후 지원 예정입니다.");
// }

function JoinFormTemplate() {
    const [firstProc, setFirstProc] = useState(true);
    const [secondProc, setSecondProc] = useState(false);
    /**
     * 입력 값 유효성 체크
     */
    const fncChkVal = () => {
        setFirstProc(false);
        setSecondProc(true);
    };

    return (
        <MainTemplate>
            <JoinFormBlock>
                {/* 아이디, 비밀번호 입력 */}
                {firstProc ? (
                    <div className="join_proc_1">
                        <form>
                            <h3 className="form_notice_txt">로그인에 사용할 아이디를 입력해주세요.</h3>
                            <div className="input_box">
                                <input placeholder="아이디 (이메일) 입력" autoCapitalize="none" type="text" name="username" defaultValue={""} onChange={fncChkVal} />
                            </div>
                            <h3 className="form_notice_txt">로그인에 사용할 비밀번호를 입력해주세요.</h3>
                            <div className="input_box">
                                <input placeholder="비밀번호 입력" autoCapitalize="none" type="password" name="password" defaultValue={""} />
                            </div>
                            <BtnDefault className="btn_join" title="다음" onClick={fncGoNextProc} disabled={true}/>
                        </form>
                    </div>
                ) : (
                    ""
                )}

                {/* 본인인증 필드 노출 */}
                {secondProc ? (
                    <div className="join_proc_2">
                        <h3 className="form_notice_txt">본인인증을 진행해주세요.</h3>
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="css-wmzlvu ecos80d0">
                            <rect y="6" width="12" height="11" fill="#375FFF"></rect>
                            <rect x="2.5" y="0.5" width="7" height="10" rx="3.5" stroke="#375FFF"></rect>
                        </svg>
                        <span>안전한 거래를 위해 딱 한 번 본인인증을 진행해요.</span>
                        <BtnDefault className="btn_join" title="본인인증하고 가입완료하기" onClick={fncGoNextProc} />
                    </div>
                ) : (
                    ""
                )}
            </JoinFormBlock>
        </MainTemplate>
    );
}

export default JoinFormTemplate;