import * as React from "react"; // Reactライブラリをインポート
import { Link, useHistory } from "react-router-dom"; // react-router-domからLinkとuseHistoryをインポート
import styled from "styled-components"; // styled-componentsライブラリをインポート
import { Header } from "../components/header"; // Headerコンポーネントをインポート
import { getMemos, MemoRecord } from "../indexeddb/memos"; // getMemos関数とMemoRecordインターフェースをインポート

// ReactのuseStateとuseEffectフックをインポート
const { useState, useEffect } = React;

// ヘッダーエリアのスタイルを定義
const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`;

// ラッパーのスタイルを定義
const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

// メモのスタイルを定義
const Memo = styled.button`
  display: block;
  background-color: white;
  border: 1px solid gray;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
`;

// メモのタイトルのスタイルを定義
const MemoTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

// メモのテキストのスタイルを定義
const MemoText = styled.div`
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Historyコンポーネントを定義
interface Props {
  setText: (text: string) => void; // テキストを設定する関数
}

export const History: React.FC<Props> = (props) => {
  const { setText } = props; // プロパティからsetTextを取得
  const [memos, setMemos] = useState<MemoRecord[]>([]); // memos状態とその更新関数を定義
  const history = useHistory(); // useHistoryフックを使用してhistoryオブジェクトを取得

  // コンポーネントがマウントされたときにgetMemos関数を呼び出し、取得したメモを状態にセット
  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  console.log(memos); // memosの内容をコンソールに出力

  return (
    <>
      <HeaderArea>
        <Header title="履歴">
          {/* Linkコンポーネントを使用してエディタページへのリンクを作成 */}
          <Link to="/editor">エディタに戻る</Link>
        </Header>
      </HeaderArea>
      {/* メモの履歴を表示するためのラッパー */}
      <Wrapper>
        {/* memos配列をmap関数でループし、各メモを表示 */}
        {memos.map((memo) => (
          // メモのdatetimeをキーとしてMemoコンポーネントをレンダリング
          <Memo
            key={memo.datetime}
            onClick={() => {
              setText(memo.text); // メモのテキストを設定
              history.push("/editor"); // エディタページに遷移
            }}
          >
            {/* メモのタイトルを表示 */}
            <MemoTitle>{memo.title}</MemoTitle>
            {/* メモのテキストを表示 */}
            <MemoText>{memo.text}</MemoText>
          </Memo>
        ))}
      </Wrapper>
    </>
  );
};
