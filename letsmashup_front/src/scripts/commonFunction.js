/********************************************************************
 * @설명 : 공통함수 
 ********************************************************************/

/* eslint-disable */
import axios from "axios";

// API 호출 함수
export let fncCallAPI = (sURL, inParam) => {
    // get
    axios
        .get(sURL)
        .then((Response) => {

        })
        .catch((Error) => {

        });
};

// 콘솔 로그 함수
export let fncPrintLog = (sTitle, sContents) => {
    if (sTitle.length === 0 || sContents.length === 0) { // 로그 타이틀 또는 콘텐츠 파라미터 없으면
        sTitle.length === 0 ? sContents = sTitle : sTitle = sContents;
    }
    // console.log("%c------------------ fncPrintLog ------------------", "color: white; font-weight: 500; font-size: 12px;");
    console.log("%c>>> " + sTitle + "\n>>> " + sContents, "background:blue; color: white; font-family: 'campton', 'Apple SD Gothic Neo', 'NanumGothic', '나눔고딕', 'Malgun Gothic', '맑은 고딕'; font-size: 12px; font-weight: 500;");
    // console.log("%c------------------- fncPrintLog END -------------------", "color: white; font-weight: 500; font-size: 12px;");
};
