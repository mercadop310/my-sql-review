//step four
const db = require("./index");
module.exports ={
    readAll: (callback) => {
        db.query("SELECT * FROM tennis;", (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    addItem: ({name, amount}) => {
        db.query(
          `INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount});`  
        );
    }
};