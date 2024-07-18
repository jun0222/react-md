import * as React from "react"; // Reactライブラリをインポート
import styled from "styled-components"; // styled-componentsライブラリをインポート
import { useStateWithStorage } from "../hooks/use_state_with_storage"; // useStateWithStorageフックをインポート
import * as ReactMarkdown from "react-markdown"; // ReactMarkdownライブラリをインポート
import { putMemo } from "../indexeddb/memos"; // putMemo関数をインポート
import { Button } from "../components/button"; // Buttonコンポーネントをインポート
import { SaveModal } from "../components/save_modal"; // SaveModalコンポーネントをインポート
import { Header } from "../components/header"; // Headerコンポーネントをインポート
import { Link } from "react-router-dom"; // Linkコンポーネントをインポート

const { useState } = React; // ReactのuseStateフックをインポート

// ヘッダーコントロールのスタイルを定義
const HeaderControl = styled.div`
  height: 2rem;
  display: flex;
  align-content: center;
`;

// ヘッダーエリアのスタイルを定義
const HeaderArea = styled.header`
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
`;

// テキストエリアのスタイルを定義
const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`;

// プレビューエリアのスタイルを定義
const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`;

// Editorコンポーネントのプロパティの型を定義
interface Props {
  text: string; // テキスト
  setText: (text: string) => void; // テキストを設定する関数
}

// Editorコンポーネントを定義
export const Editor: React.FC<Props> = (props) => {
  const { text, setText } = props; // プロパティからtextとsetTextを取得
  const [showModal, setShowModal] = useState(false); // showModal状態とその更新関数を定義

  return (
    <>
      <HeaderArea>
        <Header title="react-md">
          {/* 保存ボタンを表示し、クリック時にモーダルを表示 */}
          <Button onClick={() => setShowModal(true)}>保存する</Button>
          {/* 履歴ページへのリンクを表示 */}
          <Link to="/history">履歴</Link>
        </Header>
      </HeaderArea>
      <Wrapper>
        {/* テキストエリアを表示し、変更時にテキストを更新 */}
        <TextArea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        {/* テキストのプレビューを表示 */}
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      </Wrapper>
      {/* モーダルが表示されている場合、SaveModalコンポーネントを表示 */}
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text); // メモを保存
            setShowModal(false); // モーダルを閉じる
          }}
          onCancel={() => setShowModal(false)} // キャンセル時にモーダルを閉じる
        />
      )}
    </>
  );
};
