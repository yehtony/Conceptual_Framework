const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./app/config/db.config.js');
const db = require('./app/models'); // 引入 app/models/index.js 匯出的程式碼(即 sequelize model 定義檔)
const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
require('./app/routes/index.js')(app);

// 呼叫 sync function 將會依 model 定義內容産生資料表，force 參數值為 true 將會重建已存在的資料表
db.sequelize
    .sync({ force: true })
    .then(() => {
      console.log('Drop and Resync Database with { force: true }');
      // initial(); // 産生資料表後，呼叫 initial function 為 roles table 新增三筆初始資料
    })
    .catch((err) => {
      console.log(err);
    });

// 為 roles table 新增三筆初始資料
// const DB = db;
// function initial() {
//   DB.project.create({
//     id: 1,
//     name: 'NLP',
//   });
// }
