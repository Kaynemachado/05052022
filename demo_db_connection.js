var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "demo_db_connection.js"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});