var mysql = require('mysql');

var con = mysql.createConnection({
    database: 'medical-system',
    user: 'root',
    password: 'root',
    host: 'localhost'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;