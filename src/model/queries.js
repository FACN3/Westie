const connect = require('../../database/db_connection');

const getAllDogPics = (cb) => {
  connect.query(
    `SELECT * FROM pictures;`, (err, res) => {
       cb(err, res.rows);
    });
};
module.exports = { getAllDogPics };
