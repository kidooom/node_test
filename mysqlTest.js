var mysql = require("mysql");

var connection = mysql.createConnection({
   user: "root",
   database: "node_test"
});

connection.query("SHOW TABLES", function(err, result, fields){
    console.log(result);
});

