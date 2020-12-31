##Docker

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
