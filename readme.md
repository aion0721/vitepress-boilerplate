# Vitepress-BoilerPlate

このリポジトリは VuePress を使用した静的サイトのボイラープレートです。VuePress は Vue.js をベースにした軽量でパワフルな静的サイトジェネレータです。このボイラープレートを使用して、ドキュメントサイト、ブログ、個人ポートフォリオなどを簡単に構築できます。

## 特徴

- Vue.js をベースにした柔軟なデザイン
- マークダウンでのコンテンツ作成
- カスタマイズ可能なテーマとプラグイン
- SEO フレンドリーな構造

## 必要条件

このプロジェクトを使用するには以下が必要です：

- Node.js（推奨バージョン：20.x 以上）
- yarn（推奨バージョン：1.22.x 以上）

## インストール

プロジェクトのクローンと依存関係のインストールを行います：

```bash
git clone https://github.com/aion0721/vitepress-boilerplate
cd vuepress-boilerplate
yarn
```

## 使用方法

ローカルサーバーを起動してプロジェクトをプレビューします：

```bash
yarn docs:dev
```

ブラウザで `http://localhost:5173/` を開いてプロジェクトを確認できます。

## ビルド

静的ファイルを生成するには、以下のコマンドを実行します：

```bash
yarn docs:build
```

ビルドされたファイルは `docs/.vuepress/dist` ディレクトリに格納されます。

## 注意事項

ページを足した場合は、sidebar 定義を修正する必要があります。

### カテゴリを追加した場合

guide, practice のようにディレクトリを追加した場合は以下修正が必要です。

```js:/docs/.vitepress/config.js
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Practice", link: "/practice/" },
    ],
    sidebar: {
      "/": [
        {
          text: "guide",
          items: [{ text: "Top", link: "/guide/" }],
        },
        {
          text: "practice",
          items: [{ text: "Top", link: "/practice/" }],
        },
      ],
    },
```

nav と sidebar の定義を追記してあげてください。
こうすることで、右上のナビゲーションと、左のサイドバーに追加されます。

### ページを追加した場合

ディレクトリ配下にページを追加した場合は以下に追加してあげてください。

```js:/docs/.vitepress/config.js
    sidebar: {
      "/": [
        {
          text: "guide",
          items: [{ text: "Top", link: "/guide/" }],
        },
        {
          text: "practice",
          items: [{ text: "Top", link: "/practice/" }],
        },
      ],
    },
```

こうすることで左側のサイドバーに追加されます。

## 貢献

プロジェクトへの貢献に興味がある場合は、プルリクエストやイシューをお気軽にお寄せください。

## ライセンス

このプロジェクトは[MIT ライセンス](LICENSE)の下で公開されています。
