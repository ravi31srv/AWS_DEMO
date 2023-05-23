const mysql = require("mysql");

const pool = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_database_name",
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Db connected succesfully");
});
