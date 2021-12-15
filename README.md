# frourio demo app

文字数指定大喜利
→ 知恵袋の大喜利専用版のようなもの

- ユーザはお題と共にトピックを立てられ、「回答は ○ 文字まで」という指定を行う
  - トピック投稿主による回答終了操作、もしくは指定した時間を満了した際に回答が締め切られる
  - 回答の中で一番いいねが多かったものをベストアンサーとし、上の方にピックアップする
- ユーザは立てられたトピックに対して回答ができる
- ユーザはそれぞれの回答に対していいねがつけられる
- ユーザは大喜利タイトル名で回答募集中トピックの検索ができる

# tech

- frourio
  - Next.js
  - Fastify
  - aspida
  - SWR
  - prisma
  - Jest
- chakraUI
- Recoil
- firebase?

# Front

## 認証

- google

## 状態管理

- ログイン済みユーザ情報
  - id
  - name
  - email
- 検索バーに入力中の文字列
  - text
- 検索中の文字列
  - text

# Backend

## db

```uml
@startuml
entity "users" {
  + id Int [PK]
  --
  name String
  email String
  image_url? String
  ==
  Get()
  Post()
}

entity "topics" {
  + id Int [PK]
  --
  # user_id Id [FK]
  title String
  content String
  limit_answer_char Int
  answer_closed_at Date
  close Boolean
  ==
  Get()
  List()
  Post()
}

entity "answers" {
  + id Int [PK]
  --
  # topic_id Int [FK]
  # user_id Int [FK]
  answer String
  ==
  List()
  Post()
}

entity "likes" {
  + id Int [PK]
  --
  # answer_id Int [FK]
  # user_id Int [FK]
  ==
  List()
  Post()
}

users ||--o{ topics
users ||--o{ answers
topics ||--o{ answers
users ||--o{ likes
answers ||-r-o{ likes

@enduml
```
