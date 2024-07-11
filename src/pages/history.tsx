// Reactライブラリをインポート
import * as React from "react";
// react-router-domライブラリからuseHistoryフックをインポート
import { useHistory } from "react-router-dom";
// カスタムButtonコンポーネントをインポート
import { Button } from "../components/button";

// Historyコンポーネントを定義
export const History: React.FC = () => {
  // useHistoryフックを使用してhistoryオブジェクトを取得
  const history = useHistory();
  return (
    <>
      {/* タイトルを表示 */}
      <h1>History</h1>
      {/* ボタンを表示し、クリック時に"/editor"パスに遷移 */}
      <Button onClick={() => history.push("/editor")}>エディタへ戻る</Button>
    </>
  );
};
