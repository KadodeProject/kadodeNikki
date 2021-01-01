# このアプリについて

かどで日記は自分のために作った日記アプリです。

かどでは土佐日記の最初の章？である「門出」より引用しました。

### できること(検討中を含む)
- 日記の入力、閲覧
- 日記のインポート(月に書く日記,10年日記様より)
- 日記のエクスポート(txt,csv,pdf)
- 日記のバックアップ(GoogleDrive)
- 過去の日記をピックアップ
- 日記の傾向を読み取る(よく使う言葉、口癖など)
- 日記をGitGrassみたいにすることで習慣化させる機能
- 日記にその日のベストTweetやYouTubeを連携させる
- 日記にその日の気持ちをバーで値入れれる
- 日記に画像を貼れる（←おそらく難しい）

### ER 図

![kadodeNikki](https://user-images.githubusercontent.com/63891531/103432618-4f211080-4c25-11eb-9e56-756310fb007b.png)

https://drive.google.com/file/d/11xgTnkV_ZZzo2sN4NKNINKlUFBoF3DOo/view?usp=sharing

### 画面レイアウト
![image](https://user-images.githubusercontent.com/63891531/103432630-84c5f980-4c25-11eb-9907-2c417adae0d8.png)

https://www.figma.com/file/dHA1JlVuyrXWHatdpSoPgI/SM-and-PC?node-id=0%3A1

### 技術(予定)
フロントエンド: React
バックエンド: Laravel or Firebase
CSSフレームワーク: TailwindCSS
インフラ: さくらVPS(KUSANAGI)
環境: Docker

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

https://qiita.com/rei67/items/273ebef44d19912733b7


