# Node.jsのベースイメージを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /src/app/frontend

# package.json と package-lock.json をコピー
COPY ./package*.json ./

# 残りのフロントエンドのコードをコピー
COPY ./ /src/app/frontend

# 依存関係をインストール
RUN npm install
