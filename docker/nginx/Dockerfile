# https://hub.docker.com/_/phpにあるイメージファイルを指定
FROM nginx
EXPOSE 80
# RUNコマンドは、buildしたときに元となるdockerイメージに対して実行する処理を記述する。
# \（バックスラッシュ）を用いて、複数行に分けることが可能。
# パッケージ一覧を更新
RUN apt update \
    # gitのインストール
    && apt install -y git
# nodeインストール(aptだとNodejsは古いため、パッケージマネージャの n を使用してインストール)
RUN apt install -y npm \
    && npm install n -g \
    && n stable
RUN npm install -g npm
# RUN , CMD , ENTRYPOINT , COPY , ADD を実行する時のワーキングディレクトリを指定
WORKDIR /var/www/html
