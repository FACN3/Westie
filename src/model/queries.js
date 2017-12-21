const connect = require('../../database/db_connection');

const getAllDogPics = cb => {
  connect.query(`SELECT * FROM pictures;`, (err, res) => {
    cb(err, res.rows);
  });
};

const getPicById = (picId, cb) => {
  connect.query(
    `SELECT *
FROM likes l right join pictures p 
on l.pictureId = p.id 
WHERE p.id = $1`,
    [picId],
    (err, res) => {
      cb(err, res.rows[0]);
    }
  );
};

const addLike = (picID, cb) => {
  connect.query(
    `UPDATE likes
    SET count = count + 1
    WHERE pictureId = $1`,
    [picID],
    (err, res) => {
      cb(err, res);
    }
  );
};
module.exports = { getAllDogPics, getPicById, addLike };