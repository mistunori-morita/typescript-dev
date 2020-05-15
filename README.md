## ts-node

ver が 8.6 以上の場合
`npx ts-node-dev xxxx(ファイル名)` → エラーがでない
`npx ts-node xxxx(ファイル名)` → エラー表示になる

って感じなので
ver を 8.5.4 に戻す

## ver 確認

`npm info ts-node versions`

## 戻す

npm uninstall --save-dev ts-node

## 再インストール

npm install --save-dev ts-node@8.5.4

## echo コマンド

`'export {};' > src/number-string.ts` みたいにやるとすぐ `eport込みで作れる`
