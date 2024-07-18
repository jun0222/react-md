// DexieというIndexedDBのラッパーライブラリをインポートします。
import Dexie from "dexie";

// メモのデータ構造を定義するインターフェースをエクスポートします。
export interface MemoRecord {
  datetime: string; // メモが作成された日時
  title: string; // メモのタイトル
  text: string; // メモの本文
}

// "react-md"という名前の新しいDexieデータベースを作成します。
const database = new Dexie("react-md");

// データベースのバージョンを設定し、"memos"という名前のテーブルを作成します。
// "&datetime"は、datetimeフィールドがテーブルの主キーであることを示します。
database.version(1).stores({ memos: "&datetime" });

// "memos"テーブルへの参照を作成します。
// このテーブルは、MemoRecordオブジェクトを格納し、主キーはstring型です。
const memos: Dexie.Table<MemoRecord, string> = database.table("memos");

// 新しいメモをデータベースに追加する非同期関数をエクスポートします。
export const putMemo = async (title: string, text: string): Promise<void> => {
  // 現在の日時をISO形式の文字列として取得します。
  const datetime = new Date().toISOString();

  // 新しいメモを"memos"テーブルに追加します。
  await memos.put({ datetime, title, text });
};

// データベースからメモを取得する非同期関数をエクスポートします。
export const getMemos = (): Promise<MemoRecord[]> => {
  return memos.orderBy("datetime").reverse().toArray();
};
