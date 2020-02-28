//step three
const db = require("./index");
const data = [
    {name: "peter", amount: 31},
    {name: "naruto", amount: 30},
    {name: "sasuke", amount: 30},
    {name: "asta", amount: 16},
    {name: "deku", amount: 16}
];
//iterate through data to populate tennis table
data.forEach(({name, amount}) => {
    db.query(
        `INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount});`
    );
});