FROM golang:1.23-alpine

# パッケージインストール
RUN apk add --no-cache git

# 作業ディレクトリを設定
WORKDIR /go/src/app

# Go Modulesの依存パッケージをインストール
RUN go mod init todo_app
RUN go mod tidy

# アプリケーションコードをコピー
COPY . .
