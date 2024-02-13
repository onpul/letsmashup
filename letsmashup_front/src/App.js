import { createGlobalStyle } from "styled-components";
// import MainTemplate from "./components/MainTemplate";
// import HeaderTemplate from "./components/HeaderTemplate";
import JoinFormTemplate from "./components/JoinFormTemplate";
import LoginFormTemplate from "./components/LoginFormTemplate";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Auth from "./components/Auth";
import TestMain from "./components/TestMain"
// import MainTemplate from "./components/MainTemplate";

const GlobalStyle = createGlobalStyle`
  /* 기본 적용 스타일 초기화 */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* font: inherit; */
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
  form {
    box-sizing: border-box;
  }
  a {
        text-decoration: none;
        color: #ffffff;
    }
  html, body {
    height: 100%;
  }
  body {
    background: #FFFFFF;
    font-family: 'campton', 'Apple SD Gothic Neo', 'NanumBarunGothic', '나눔바른고딕', 'Malgun Gothic', '맑은 고딕', 'dotum', 'sans-serif';
  }
  div#root {
    height: 100%;
  }
`;

function App() {
  return (
      <>
          <GlobalStyle />
          <Routes>
              <Route path="/" Component={Main} />
              <Route path="/testMain" Component={TestMain} />
              <Route path="/login" Component={LoginFormTemplate} />
              <Route path="/join" Component={JoinFormTemplate} />
              <Route path="/Auth" Component={Auth} />
          </Routes>
      </>
  );
}

export default App;
