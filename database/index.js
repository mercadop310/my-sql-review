//step 1

const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "peter",
    password: "dasddasd13",
    database: "ball"
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB online")
    }
});

module.exports = db;