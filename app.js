const express = require('express');
const path = require('path');
const app = express();

// EJS 設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ルートハンドラー
app.get('/', (req, res) => {
  res.render('hello'); // hello.ejs をレンダリング
});

// ポート設定 (環境変数に対応)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
