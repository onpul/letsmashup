/********************************************************************
 * @설명 : 공통함수 
 ********************************************************************/

/* eslint-disable */
import axios from "axios";

// API 호출 함수
export let fncCallAPI = (method, sURL, sCallback, fCallback, inParam) => {
    if (method === "get") {
        axios
            .get(sURL)
            .then((response) => {
                sCallback(response);
            })
            .catch((error) => {
                fCallback(error);
            });
    }
};

// 콘솔 로그 함수
export let fncPrintLog = (sTitle, sContents) => {
    sTitle = String(sTitle || '');
    sContents = String(sContents || '');

    // console.log("%c------------------ fncPrintLog ------------------", "color: white; font-weight: 500; font-size: 12px;");
    console.log("%c>>> " + sTitle + "\n>>> " + sContents, "background:blue; color: white; font-family: 'campton', 'Apple SD Gothic Neo', 'NanumGothic', '나눔고딕', 'Malgun Gothic', '맑은 고딕'; font-size: 12px; font-weight: 500;");
    // console.log("%c------------------- fncPrintLog END -------------------", "color: white; font-weight: 500; font-size: 12px;");
};
