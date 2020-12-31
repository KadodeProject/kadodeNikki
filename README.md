# このアプリについて

かどで日記は自分のために作った日記アプリです。

かどでは土佐日記の最初の章？である「門出」より引用しました。

# Docker 関連

Docker の起動

```
docker-compose up -d --build
```

Docker の起動状態確認

```
docker-compose ps
```

Docker のログ確認

```
docker-compose logs
```

コンテナの中に入る

```
docker-compose exec kadode bash
```

バージョン確認とか

```
php -v
```

などできる。

Laravel の Permission denied 出た時は

```
chown www-data storage/ -R
```

コンテナから出る時は

```
exit
```

Docker の終了

```
docker-compose down
```

ローカルホスト
http://127.0.0.1:10080/
8000 じゃないのでご注意を。

## 参考にさせていただいた記事

https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4

https://qiita.com/10mi8o/items/b435ef7fb838a40058c5

https://tsyama.hatenablog.com/entry/docker-not-found-npm

https://qiita.com/yktk435/items/10bd69d790808dbb3e87
