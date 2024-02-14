/********************************************************************
 * @설명 : 상품 메인
 ********************************************************************/

import React, { useEffect, useState } from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";
import * as commonFunction from "../scripts/commonFunction";

const MainBlock = styled.div`
    position: relative;
    box-sizing: border-box;
    margin: -50px 0 -200px;
    padding: 50px 0 200px 0;
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
                padding: 0px 20px;
            }

            .btn_filter {
                margin-right: 6px;
                border: none;
                outline: none;
                cursor: pointer;
                border-radius: 9999px;
                background-color: rgb(244, 244, 244);
                display: flex;
                align-items: center;
                padding: 6px 12px 6px 14px;
                flex-shrink: 0;

                span {
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 500;
                    color: #474747;
                    margin-right: 6px;
                }
            }
        }
    }

    .prodItemList {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        align-items: flex-start;

        .prodItem {
            flex-basis: 150px;
            flex-grow: 1;
            display: inline-block;
            box-sizing: border-box;
            max-width: 100%;
            min-height: 1px;
            padding: 0 0 25px;
            padding-bottom: 30px;
            text-align: left;

            img {
                width: 100%;
            }
        }
        
        .itemInfoBox {
            margin: 14px 12px 0;
        }
    }
`;

function Main() {

    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        commonFunction.fncCallAPI(
            "get",
            "https://jsonplaceholder.typicode.com/photos?albumId=1",
            (response) => {
                console.log(response);
                let data = response.data;
                setImageData(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    
    return (
        <MainTemplate>
            <MainBlock className="mainContentsBox">
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
                                    <span>최신순</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                    </svg>
                                </button>
                                <button className="btn_filter">
                                    <span>가격대</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                    </svg>
                                </button>
                                <button className="btn_filter">
                                    <span>브랜드</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="secondary" className="css-wsam7k ed7xfdk6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z" fill="black"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 상품 리스트 영역 */}
                    <div>
                        <ul className="prodItemList">
                            {imageData ? (
                                imageData.map((item, index) => {
                                    return (
                                        <li className="prodItem" key={item.id}>
                                            <div>
                                                <div className="itemImgBox">
                                                    <img src={item.thumbnailUrl} alt={item.title} />
                                                </div>
                                                <div className="itemInfoBox">
                                                    <div style={{ marginBottom: "4px", color: "#000", fontSize: "12px", fontWeight: "700" }}>브랜드명</div>
                                                    <div style={{ marginBottom: "5px", color: "#5d5d5d", wordBreak: "break-all", fontSize: "12px" }}>{item.title}</div>
                                                    <div style={{ color: "#303033", lineHeight: "18px", display:"flex"}}>
                                                        <span style={{ fontSize: "16px", fontWeight: "700", marginRight: "2px" }}>999,999</span>
                                                        <span style={{ fontSize: "11px" }}>원</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <></>
                            )}
                        </ul>
                    </div>
                </ItemBlock>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;
