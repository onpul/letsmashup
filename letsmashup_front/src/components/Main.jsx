import React from "react";
import MainTemplate from "./MainTemplate";
import HeaderTemplate from "./HeaderTemplate";
import styled from "styled-components";

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
        outline: none;
        border: 0;
        border-radius: 2px;
        color: #ffffff;
        font-size: 16px;
        line-height: 56px;
        font-weight: 600;

        a {
            text-decoration: none;
            color: #ffffff;
        }
    }
`;

function Main() {
    return (
        <MainTemplate>
            <HeaderTemplate />
            <MainBlock>
                <div>
                    <h3>임시 메인 페이지</h3>
                    <button>
                        <a href="/join">가입하기 페이지로 이동하기</a>
                    </button>
                    <button>
                        <a href="/login">로그인 페이지로 이동하기</a>
                    </button>
                </div>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;