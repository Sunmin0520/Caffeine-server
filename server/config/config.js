require('dotenv').config();
  const development =  {
    username: "root",
    password: process.env.DATABASE_PASSWORD1,
    database: "caffeine",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  };

  // const development =  {
  //   username: "sunmin",
  //   password: process.env.DATABASE_PASSWORD,
  //   database: "caffeine",
  //   host: "caffeine.cxc8xblv1vqn.ap-northeast-2.rds.amazonaws.com",
  //   port: 3306,
  //   dialect: "mysql",
  //   logging: false,
  // };
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