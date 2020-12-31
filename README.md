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
docker-compose exec app bash
```

バージョン確認とか

```
php -v
```

などできる。

出る時は

```
exit
```

Docker の終了

```
docker-compose down
```
