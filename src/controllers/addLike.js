const { addLike } = require('../model/index');

const post = (request, result, next) => {
  addLike('where is pic id',(err, res) => {
    if (err) {
      next(err);
    } else {
      result.render('singlePic', {
        activePage: { singPic: true },
        addLike: 'success'
      });
    }
  });
};



// const get = (request,result, next) => {
//   getAllDogPics((err, res) => {
//     if(err){
//       next(err);
//     }else{
//       result.render('home',
//        {
//         activePage : {home : true},
//         dogPics : res
//       });
//     }
//   });

// };

// module.exports = { get }
