module.exports = {
  HOST: '172.18.0.3', // Host Name
  USER: 'postgres', // User Name
  PASSWORD: '110524031', // Password
  DB: 'postgres', // Database Name
  post: 5432,
  DIALECT: 'postgres', // 資料庫類別
  pool: {
    max: 5, // 連結池中最大的 connection 數
    min: 0,
    acquire: 30000, // 連結 Timeout 時間(毫秒)
    idle: 10000, // 連結被釋放的 idle 時間(毫秒)
  },
};
