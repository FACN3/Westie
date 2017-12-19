const {getAllDogPics} = require('../model/index');

const get = (request,result, next) => {
  getAllDogPics((err, res) => {
    if(err){
      next(err);
    }else{
      result.render('home',
       {
        activePage : {home : true},
        dogPics : res
      });
    }
  });

};

module.exports = { get }
