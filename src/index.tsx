// Reactライブラリをインポート
import * as React from "react";
// ReactDOMのrenderメソッドをインポート
import { render } from "react-dom";
// styled-componentsライブラリからstyledとcreateGlobalStyleをインポート
import styled, { createGlobalStyle } from "styled-components";
// Editorコンポーネントをインポート
import { Editor } from "./pages/editor";
// Historyコンポーネントをインポート
import { History } from "./pages/history";
// react-router-domライブラリから必要なコンポーネントをインポート

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// グローバルスタイルを定義
const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;

// メインコンポーネントを定義
const Main = (
  <>
    {/* グローバルスタイルを適用 */}
    <GlobalStyle />
    {/* ルーターを設定 */}
    <Router>
      {/* /editorパスに対するルートを定義 */}
      <Route exact path="/editor">
        <Editor />
      </Route>
      {/* /historyパスに対するルートを定義 */}
      <Route exact path="/history">
        <History />
      </Route>
      {/* その他のパスに対して/editorにリダイレクト */}
      <Redirect to="/editor" path="*" />
    </Router>
  </>
);

// メインコンポーネントをDOMにレンダリング
render(Main, document.getElementById("app"));
