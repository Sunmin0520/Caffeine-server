require('dotenv').config();

//사용할 정보들을 개발용, 테스트용, 배포용으로 나누었습니다. 추후 업데이트 할 예정입니다. (port 추가,host 변경 등)
  const development =  {
    username: "sunmin",
    password: process.env.DATABASE_PASSWORD,
    database: "caffeine",
    host: "caffeine.cxc8xblv1vqn.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  };

  const test = {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "caffeine",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  };

  const production = {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "caffeine",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  };

module.exports = { development, test, production};