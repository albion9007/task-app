# README

## アプリのタイトル

:clipboard:task-app

## アプリの概要

日々の task 管理をメモの様な形式で行えるように、タイトル、詳細、image 画像も添付できる様にしたものです。

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://master.d1bgg47sdv69g7.amplifyapp.com/)

https://master.d1bgg47sdv69g7.amplifyapp.com

github-URL:octocat:

https://github.com/albion9007/task-app

## テスト用アカウント :bust_in_silhouette:

Username ：Yuki

Password ：0416yuki

## 利用方法

1. ユーザー新規登録する:No account? Create account をクリックして、  
   <img width="1680" alt="スクリーンショット 2021-08-09 11 24 44" src="https://user-images.githubusercontent.com/68537855/128655391-e292963e-8f67-4d58-951d-91941f04e1b1.png">
   Username 、Password 、Email Address(実在のもの:繰り返し使用可)、Phone Number(無くても可)、を入力し"CREATE ACCOUNT"をクリックする。  
   <img width="1680" alt="スクリーンショット 2021-08-09 11 29 54" src="https://user-images.githubusercontent.com/68537855/128655808-74dda838-0f61-4fea-b3d6-b6ee0fe09344.png">

   その後 Confirm Sign up で先ほど登録した Email Address に送られてきた verification code を Confirmation Code に入力し "CONFIRM"ボタンをクリックすることで登録できる。  
   <img width="352" alt="スクリーンショット 2021-08-09 11 55 16" src="https://user-images.githubusercontent.com/68537855/128656414-e8decc14-6764-464d-a5f6-0edeac72d38c.png">

   （登録している場合は Username と Password を入力して Sign in する）。

2. Menu Open をクリックすると、AllTasks(現在の Task と終了した Task が全て表示される), Todo Tasks(現在の Task), Done(終了した Tas)のメニューバーが出現するため、それぞれをクリックすると、
   必要な task のみ表示される。  
   → 現在は TodoTasks のみ表示されている状態。  
   <img width="1680" alt="スクリーンショット 2021-08-09 12 10 15" src="https://user-images.githubusercontent.com/68537855/128657174-5e21411e-6344-4acb-acd7-b1aebdcd3f33.png">
3. 新規の Task を作成したい場合は＋ボタンをクリックすると、モーダルが出現し title(必須), description,image をそれぞれ入力・選択後 SAVE ボタンをクリックすれば反映される。  
   <img width="1680" alt="スクリーンショット 2021-08-09 12 22 22" src="https://user-images.githubusercontent.com/68537855/128657601-e1a7114f-fea4-4d09-9854-7857e199bd5f.png">
4. 登録した Task を編集したい場合は鉛筆アイコンをクリックすると再度モーダルが立ち上がるため、title(必須), description,image をそれぞれ編集後 Update ボタンをクリックすれば反映される。
5. Task を削除したい場合は、ゴミ箱アイコンをクリックすれば削除出来る。  
   <img width="1270" alt="スクリーンショット 2021-08-09 12 38 44" src="https://user-images.githubusercontent.com/68537855/128658287-e227c0d9-c0a8-465c-ad2d-cb2facdd6178.png">
6. sign out をクリックすれば sign out 出来る。

## 目指した課題解決

task 管理する時に画像を添付する機能を付けることで、より詳細に管理することが出来ると考えた。

## 洗い出した要件

:large_blue_circle:要件定義

_機能名_  
*優先順位  
*目的  
*詳細  
*ストーリー（ユースケース）

_ユーザー管理機能_  
*1  
*ユーザーの管理を行うため  
\*Create account,sign in, sign out を amplify の Auth 機能の Authenticator で作成

_Task 管理機能(title,description)_  
*2  
*新規作成、編集、削除機能  
\*semantic-ui の Modal 機能, reducer, graphQL, API を使い新規作成、編集

_image 画像添付機能_  
*3  
*より詳細に Task 管理を行いやすいようにするため  
\*新規作成、編集に画像添付追加

## 実装予定の機能

:white_circle:現在の Task と終了した Task をそれぞれ表示させる機能。

## こだわった機能

:large_orange_diamond:image 画像添付機能。Task に image を添付することで、昔に上げた Task も思い出しやすくするため。また、Task 管理する上でのモチベーションに繋がると考えた。
image 画像を S3 バケットに uuid を用い保存して,それを API を利用しリストで表示させる。S3 の取り扱い方はまだ理解不十分なため、今後理解を深間ていくことが課題と考える。

## 実装で困ったこと

:white_check_mark: JWTtoken エラー。  
:arrow_right: ブラウザから情報を amplify の方に送信すると graphQL でエラーが出てしまい、その原因を検証ツールで確認すると、送信された JWTtoken が通常のものよりも短く何故そのエラーが出現するかコードの記述方法を色々試行してみたり、amplify 側の影響かなど確認してみるも特に問題なく結局は chrome の拡張機能の１つの ModHeader を作動させていたことによるものだった。以前学習で使用し、そのままになっていた。これにより、JWTtoken についての理解が出来た。次回こういったエラーが出現した時は safari などの他のブラウザを使用してみる方法なども学習した。

:white_check_mark: props の受け渡し方法。  
:arrow_right:task が表示されない事象が起こっていて、react で props の受け渡しが出来ていないことが原因と分かった。親コンポーネントから<TodoTasks tasks={tasks} dispatch={dispatch}/>の様にして渡したい props を子コンポーネントへ渡し、渡された props は子コンポーネントの引数に入れて使用するという基本が分かった。

:white_check_mark: S3Bucket を install したら amplify フォルダが壊れた。  
:arrow_right: S3Bucket を install したら amplify/team-provider-info.json ファイルが破損し、コードが大幅に消えてしまった。この時にバックアップを取っていなかったため非常に困った。amplify pull で aws にある当アプリの amplify コードを install することが出来て解決した。
これにより、何かを install する前や amplify push する前などはバックアップは必ず取っておくことが大切と分かった。また、もし破損した場合に amplify pull をする選択肢がある事が分かった。また、プロジェクトを共有する際にも amplify pull を利用することが出来ると分かった。

## 実装で理解出来たこと

:large_blue_diamond: admin UI について少し理解出来た。  
:arrow_right:amplify pull 実行時に admin UI を登録しておくことで、pull が実行可能になることや、admin UI で行える管理が出来る事が分かった。

# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_one :Task

## Task テーブル

type: String! # always set to 'task'. used in the SortByTimestamp GSI
id: ID
title: String!
description: String
imageKey: String
owner: String
timestamp: Int!
