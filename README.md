# ng-iotajapan [![CircleCI](https://circleci.com/gh/iotajapan/ng-iotajapan/tree/master.svg?style=svg)](https://circleci.com/gh/iotajapan/ng-iotajapan/tree/master)
- `iotajapan.com`の元ファイル.
- `dist/iotajapan`の中身が`iotajapan.com`の実行ファイル.

# Usage
## ローカルで動かす
```bash
git clone git@github.com:iotajapan/ng-iotajapan.git
cd ng-iotajapan
# サイト起動
docker-compose up -d --build
# ブラウザで`localhost:4200`にアクセスする.
# サイト停止
docker-compose down
```

## Angularのバージョンアップ
```bash
# コンテナの中に入る
docker-compose exec angular sh
# バージョンアップを行う
ng update @angular/cli @angular/core
# コンテナから出る
exit
```
