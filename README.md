# ng-iotajapan [![CircleCI](https://circleci.com/gh/iotajapan/ng-iotajapan/tree/master.svg?style=svg)](https://circleci.com/gh/iotajapan/ng-iotajapan/tree/master)
- `iotajapan.com`の元ファイル.
- `dist/iotajapan`の中身が`iotajapan.com`の実行ファイル.

# Usage
## ローカルで動かす
```bash
# submodule も一緒に clone する
git clone --recurse-submodules git@github.com:iotajapan/ng-iotajapan.git
cd ng-iotajapan
sudo npm i
# CircleCI で自動でデプロイされたブランチを master に戻す
cd dist/iotajapan
git checkout master
cd ../..
# サイト起動
docker-compose up -d --build
# ブラウザで`localhost:4200`にアクセスする.
# サイト停止
docker-compose down
```

## Angular のバージョンアップ
```bash
# コンテナの中に入る
docker-compose exec angular sh
# バージョンアップを行う
ng update @angular/cli @angular/core
# コンテナから出る
exit
```

## Angular Material のバージョンアップ
```bash
# コンテナの中に入る
docker-compose exec angular sh
# バージョンアップを行う
ng update @angular/material
# コンテナから出る
exit
```
