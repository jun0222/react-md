// Reactライブラリをインポート
import * as React from "react";
// styled-componentsライブラリからstyledをインポート
import styled from "styled-components";

// ヘッダーのラッパーコンポーネントを定義
const HeaderWrapper = styled.header`
  // コンテンツを中央に揃える
  align-content: center;
  // フレックスボックスを使用してレイアウト
  display: flex;
  // ヘッダーの高さを2remに設定
  height: 2rem;
  // コンテンツを左右に均等に配置
  justify-content: space-between;
  // 行の高さを2remに設定
  line-height: 2rem;
  // 上下に0.5rem、左右に1remのパディングを設定
  padding: 0.5rem 1rem;
`;

// ヘッダーのタイトルコンポーネントを定義
const HeaderTitle = styled.div`
  // フォントサイズを1.5remに設定
  font-size: 1.5rem;
`;

// ヘッダーのコントロールコンポーネントを定義
const HeaderControl = styled.div`
  // コンテンツを中央に揃える
  align-content: center;
  // フレックスボックスを使用してレイアウト
  display: flex;
  // 高さを2remに設定
  height: 2rem;
  // コンテンツを中央に配置
  justify-content: center;

  // 子要素に対してスタイルを適用
  & > * {
    // 左側に0.5remのマージンを設定
    margin-left: 0.5rem;
  }
`;

// Propsインターフェースを定義
interface Props {
  // タイトルのプロパティ（文字列型）
  title: string;
  // 子要素のプロパティ（Reactノード型）
  children: React.ReactNode;
}

// Headerコンポーネントを定義
export const Header: React.FC<Props> = (props) => (
  // HeaderWrapperコンポーネントを使用
  <HeaderWrapper>
    {/* タイトルを表示 */}
    <HeaderTitle>{props.title}</HeaderTitle>
    {/* 子要素を表示 */}
    <HeaderControl>{props.children}</HeaderControl>
  </HeaderWrapper>
);
