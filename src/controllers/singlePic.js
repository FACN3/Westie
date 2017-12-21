const { getPicById } = require('../model/index');

const get = (request, result, next) => {
    console.log(request.query.id) 
  getPicById(request.query.id,(err, res) => {
    if (err) {
      next(err);
    } else {
      result.render('singlePic', {
        activePage: { singlePic: true },
        pic: res
      });
    }
  });
};

module.exports = { get };
