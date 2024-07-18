// Reactライブラリをインポートします
import * as React from "react";
// ReactDOMのrenderメソッドをインポートします
import { render } from "react-dom";
// styled-componentsライブラリからstyledとcreateGlobalStyleをインポートします
import styled, { createGlobalStyle } from "styled-components";
// Editorコンポーネントをインポートします
import { Editor } from "./pages/editor";
// Historyコンポーネントをインポートします
import { History } from "./pages/history";
// react-router-domライブラリから必要なコンポーネントをインポートします

import { useStateWithStorage } from "./hooks/use_state_with_storage";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// グローバルスタイルを定義します
const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;
// ローカルストレージのキーを定義
const StorageKey = "/editor:text";

// Mainコンポーネントを定義
const Main: React.FC = () => {
  // useStateWithStorageフックを使用して、ローカルストレージに保存されたテキストを状態として管理
  const [text, setText] = useStateWithStorage("", StorageKey);

  return (
    <>
      {/* グローバルスタイルを適用 */}
      <GlobalStyle />
      {/* ルーティングを設定 */}
      <Router>
        <Switch>
          {/* /editorパスにマッチした場合、Editorコンポーネントをレンダリング */}
          <Route exact path="/editor">
            <Editor text={text} setText={setText} />
          </Route>
          {/* /historyパスにマッチした場合、Historyコンポーネントをレンダリング */}
          <Route exact path="/history">
            <History setText={setText} />
          </Route>
          {/* その他のパスにマッチした場合、/editorにリダイレクト */}
          <Redirect to="/editor" path="*" />
        </Switch>
      </Router>
    </>
  );
};

// MainコンポーネントをDOMにレンダリング
render(<Main />, document.getElementById("app"));
