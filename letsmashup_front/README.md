# 화면 설계서
https://mjchoi-atwork.atlassian.net/wiki/spaces/L/pages/753674

# 리액트 컴포넌트 구조
https://mjchoi-atwork.atlassian.net/wiki/spaces/L/pages/983065

# 개발 일지
https://mjchoi-atwork.atlassian.net/wiki/spaces/L/pages/1769534

---

# TIL

### 20240201
1) setState 바로 업뎃 안 되는 이슈
if (regex_pw.test(sInputVal.value)) {
    setCheckPW(true);
    commonFunction.fncPrintLog("sInputVal.value", sInputPW);
} else {
    setCheckPW(false);
}
- 인풋값 유효성 검사해서 버튼 disabled 처리하려고 했는데, 유효성 검사 만족 후에도 상태값이 한 번 더 바뀐 후에야(인풋 한번 더 입력-onchange) 업뎃되는 거 확인...
- state 는 비동기 동작임