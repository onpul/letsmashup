/********************************************************************
 * @설명 : 상품 메인
 ********************************************************************/

import React from "react";
import MainTemplate from "./MainTemplate";
import styled from "styled-components";

const MainBlock = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 100%;
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

        .prodItem {
            display: inline-block;
            box-sizing: border-box;
            width: 50%;
            height: auto;
            background: lightgray;
            padding-bottom: 30px;
        }
    }
`;

function Main() {
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
                            {/* 
                            <li className="prodItem">
                                <div className="css-jwhhfi e4ed4ur0">
                                    <a href="https://product.29cm.co.kr/catalog/1674338" title="ESSENTIAL 2 BUTTON WOOL BLAZER BLACK_UDJA4A202BK" className="css-5cm1aq e4ed4ur1">
                                        <div className="css-8wyujp e4ed4ur10">
                                            <img src="https://img.29cm.co.kr/item/202402/11eec0c78831e47cb238a9c44bc2cb7a.jpg?width=400" alt="ESSENTIAL 2 BUTTON WOOL BLAZER BLACK_UDJA4A202BK" />
                                        </div>
                                    </a>
                                    <div className="css-1drk60u e4ed4ur3">
                                        <a href="https://shop.29cm.co.kr/brand/13310" title="던스트" className="css-r28l8o e4ed4ur4">
                                            던스트
                                        </a>
                                        <a href="https://product.29cm.co.kr/catalog/1674338" title="ESSENTIAL 2 BUTTON WOOL BLAZER BLACK_UDJA4A202BK" className="css-5cm1aq e4ed4ur1">
                                            <div className="css-1slcl62 e4ed4ur2">
                                                <h5 id="product_name_13">ESSENTIAL 2 BUTTON WOOL BLAZER BLACK_UDJA4A202BK</h5>
                                                <div className="css-qthr7l e4ed4ur5">
                                                    <strong id="product_price_13_consumer" className="css-vpz6w1 e4ed4ur6">
                                                        239,000
                                                    </strong>
                                                    <div className="css-19cy31c e4ed4ur7">
                                                        <span className=" css-1nr17il e4ed4ur8">12%</span>
                                                        <strong id="product_price_13_sale" className="css-s9qxfl e4ed4ur9">
                                                            210,320
                                                        </strong>
                                                    </div>
                                                </div>
                                                <ul className="css-kkyj92 epw6wzk0">
                                                    <li color="#1d1d1d" className="css-pcsmuw epw6wzk1">
                                                        무료배송
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                        <div className="css-1th6n36 e4ed4ur12">
                                            <button height="28" className="css-1y6oze6 e4ed4ur15">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20">
                                                    <path d="M2.24 3.425a4.758 4.758 0 0 1 6.79 0c.416.421.74.901.971 1.413.23-.512.553-.992.97-1.413a4.758 4.758 0 0 1 6.79 0 4.91 4.91 0 0 1 0 6.88L10 18.166l-7.76-7.863-.166-.176a4.911 4.911 0 0 1 .166-6.703z" fill="none" fill-rule="evenodd" stroke="#000000" stroke-width="1"></path>
                                                </svg>
                                            </button>
                                            <div className="css-e8z2yt e4ed4ur13">
                                                <svg className="css-15ro776 e4ed4ur14" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20">
                                                    <path d="M2.24 3.425a4.758 4.758 0 0 1 6.79 0c.416.421.74.901.971 1.413.23-.512.553-.992.97-1.413a4.758 4.758 0 0 1 6.79 0 4.91 4.91 0 0 1 0 6.88L10 18.166l-7.76-7.863-.166-.176a4.911 4.911 0 0 1 .166-6.703z" fill="#a0a0a0" fill-rule="evenodd" stroke="#a0a0a0" stroke-width="0.7"></path>
                                                </svg>
                                                6,108
                                            </div>
                                            <a href="https://product.29cm.co.kr/catalog/1674338#review" className="css-nv5lkn e4ed4ur16">
                                                <svg className="e4ed4ur17 css-18fin6o e1ozur0p0" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12">
                                                    <path fill="#a0a0a0" fill-rule="evenodd" stroke="#a0a0a0" stroke-width="0.7" d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"></path>
                                                </svg>
                                                4.5 (274)
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li> 
                            */}
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                            <li className="prodItem">상품 아이템</li>
                        </ul>
                    </div>
                </ItemBlock>
            </MainBlock>
        </MainTemplate>
    );
}

export default Main;
