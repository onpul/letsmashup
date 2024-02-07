/********************************************************************
 * @설명 : 상품 메인
 ********************************************************************/

import React from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";

const MainBlock = styled.div`
    position: relative;
    box-sizing: border-box;
    padding-bottom: 68px; // 하단 소개 영역
`;

const MenuBlock = styled.div`
    margin: 0px;
    padding: 26px 13px 21px 18px;
    background: rgb(228, 228, 228);

    /* 메뉴 ul 태그 */
    .menuListBox {
        display: flex;
        flex-wrap: wrap;

        /* 메뉴 a 태그 */
        .menuListItem {
            box-sizing: border-box;
            display: flex;
            width: calc(33.3% - 5px);
            height: 44px;
            margin: 0px 5px 5px 0px;
            padding: 10px;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
            color: black;
            background-color: white;
        }
    }
`;

const ItemBlock = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .itemFilterBox {
        position: sticky;
        z-index: 9;
        background-color: rgb(255, 255, 255);

        .filterBox {
            width: auto;
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            overflow: hidden;
            padding: 14px 0px;
            position: sticky;
            top: 49px;
            border-top: 1px solid rgb(244, 244, 244);

            div {
                align-items: stretch;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                z-index: -1;
                overflow-x: scroll;

                .btn_filter {
                    border: none;
                    outline: none;
                    cursor: pointer;
                    border-radius: var(--ruler-scale-corner-radius-full);
                    background-color: rgb(244, 244, 244);
                    display: flex;
                    align-items: center;
                    padding: 6px 12px 6px 14px;
                    flex-shrink: 0;
                }
            }
        }
    }
`;

function Main() {
    return (
        <MainTemplate>
            <MainBlock>
                {/* 전체 메뉴 영역 */}
                <MenuBlock>
                    <ul className="menuListBox">
                        <a href="/" className="menuListItem">
                            ALL
                        </a>
                        <a href="/" className="menuListItem">
                            상의
                        </a>
                        <a href="/" className="menuListItem">
                            아우터
                        </a>
                        <a href="/" className="menuListItem">
                            바지
                        </a>
                        <a href="/" className="menuListItem">
                            원피스
                        </a>
                        <a href="/" className="menuListItem">
                            스커트
                        </a>
                    </ul>
                </MenuBlock>
                {/* 상품 영역 */}
                <ItemBlock>
                    {/* 상품 필터 영역 */}
                    <div className="itemFilterBox">
                        <div className="filterBox">
                            <div>
                                <button className="btn_filter">
                                    <span>
                                        최신순
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button className="btn_filter">
                                    <span>
                                        가격대
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button className="btn_filter">
                                    <span>
                                        브랜드
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>상품 리스트 영역</div>
                </ItemBlock>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;
