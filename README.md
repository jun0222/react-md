## デプロイ先

https://jun0222.github.io/react-md/

## 参考

https://www.techpit.jp/courses/111/curriculums/114/sections/855/parts/3150

## 環境情報

- create-react-app などは使わない

## コマンド

```bash

# ローカルサーバーの起動
npm start
```

## history

```bash
# react-mdという名前のファイルまたはディレクトリを削除します
rm react-md

# react-mdという名前の新しいディレクトリを作成します
mkdir react-md

# Visual Studio Codeでreact-mdディレクトリを開きます
code react-md/

# package.jsonという名前の新しいファイルを作成します
touch package.json

# package.jsonに定義された"start"スクリプトを実行します
npm start

# 現在のディレクトリで新しいGitリポジトリを初期化します
git init

# webpack.config.jsという名前の新しいファイルを作成します
touch webpack.config.js

# srcという名前の新しいディレクトリを作成します
mkdir src/

# srcディレクトリ内にindex.jsという名前の新しいファイルを作成します
touch src/index.js

# package.jsonに定義された"build"スクリプトを実行します
npm run build

# webpackのバージョン5とwebpack-cliのバージョン4をインストールします
npm i webpack@5 webpack-cli@4

# .gitignoreという名前の新しいファイルを作成します
touch .gitignore

# 再度、package.jsonに定義された"build"スクリプトを実行します
npm run build

# 最後の50コマンドの履歴を表示します
history 50

# TypeScriptのバージョン4をインストールします
npm i typescript@4

# ts-loaderのバージョン9をインストールします
npm i ts-loader@9

# tsconfig.jsonという名前の新しいファイルを作成します
mv src/index.js src/index.ts

# buildスクリプトを実行します && nodeコマンドでdist/index.jsを実行します
npm run build && node ./dist/index.js

# Reactのバージョン17をインストールします && @types/reactと@types/react-domのバージョン17をインストールします
npm i react@17 react-dom@17 @types/react@17 @types/react-dom@17
```

## Github Pages にデプロイ

- index.html を作成する
- build スクリプトを実行する
- git push する
- github 側の設定をする

→ `react-github-pages`ブランチに markdown 機能を除いた資材があるので流用可能
**※このブランチ。マージしない**
