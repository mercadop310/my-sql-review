//step four
const {readAll, addItem} = require("../database/models.js");

const controllers = {
  getItems: (req, res) => {
    // TODO
    readAll((err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
    res.status(200).send()
    console.log('We got it');
  },
  postItems: (req, res) => {
    addItem(req.body, err => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("item added");
      }
    });
    // TODO
    console.log('This is your post request speaking')
  }
}

module.exports = controllers;