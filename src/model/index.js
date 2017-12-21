const queries = require('./queries');

module.exports = {
  getAllDogPics: queries.getAllDogPics,
  getPicById: queries.getPicById,
  addLike: queries.addLike
};
