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

// const fncGoJoin = () => {
//     alert("가입하기는 추후 지원 예정입니다.");
// }

function JoinFormTemplate() {
    const [checkID, setCheckID] = useState(false);
    const [checkPW, setCheckPW] = useState(false);
    const [firstProc, setFirstProc] = useState(true);
    const [secondProc, setSecondProc] = useState(false);
    const [btnNextDisa, setBtnNextDisa] = useState(true);

    /**
     * 입력 값 유효성 체크
     */
    const fncChkVal = (e) => {
        const sInputVal = e.target;
        const regex_id = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const regex_pw = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/);

        console.log(">>> sInputVal.name : " + sInputVal.name + " <<<");
        if (sInputVal.name === "userID") {
            // 아이디: 이메일 형태
            // RFC 5322 호환 정규식
            // https://webcache.googleusercontent.com/search?q=cache:514Y4NDdl6sJ:https://emailregex.com/+&cd=1&hl=ko&ct=clnk&gl=kr
            // eslint-disable-next-line

            if (regex_id.test(sInputVal.value)) {
                setCheckID(true);
                // console.log(">>> sInputVal.value : " + sInputVal.value + " <<<");
                // console.log(">>> ID 입력값 유효성 검사 : " + regex_id.test(sInputVal.value) + " <<<");
            } else {
                setCheckID(false);
                // console.log(">>> ID 입력값 유효성 검사 : " + regex_id.test(sInputVal.value) + " <<<");
            }
        } else if (sInputVal.name === "password") {
            // 비밀번호: 대소문자, 숫자, 특수문자, 8-20자 이내
            // https://byul91oh.tistory.com/624
            if (regex_pw.test(sInputVal.value)) {
                setCheckPW(true);
                console.log(">>> sInputVal.value : " + sInputVal.value + " <<<");
                console.log(">>> PW 입력값 유효성 검사 : " + regex_pw.test(sInputVal.value) + " <<<");
            } else {
                setCheckPW(false);
                console.log(">>> PW 입력값 유효성 검사 : " + regex_pw.test(sInputVal.value) + " <<<");
            }
        }

        if (checkID && checkPW) {
            setBtnNextDisa(false);
        }
    };

    /**
     * 다음 프로세스 이동
     */
    const fncGoNextProc = (e) => {
        if (e.target.title === "다음") {
            setFirstProc(false);
            setSecondProc(true);
        } else {
            alert(">>> 본인인증하고 가입완료하기 버튼 클릭 <<<");
        }
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
                                <input placeholder="아이디 (이메일) 입력" autoCapitalize="none" type="text" name="userID" defaultValue={""} onChange={fncChkVal} />
                            </div>
                            <h3 className="form_notice_txt">로그인에 사용할 비밀번호를 입력해주세요.</h3>
                            <div className="input_box">
                                <input placeholder="비밀번호 입력" autoCapitalize="none" type="password" name="password" defaultValue={""} maxLength={20} onChange={fncChkVal} />
                            </div>
                            <BtnDefault className="btn_join" title="다음" onClick={fncGoNextProc} disabled={btnNextDisa} />
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

export default React.memo(JoinFormTemplate);