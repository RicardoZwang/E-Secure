const mysql = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "123",
  database: "mydb",
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
