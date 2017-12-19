exports.get = (req,res) => {
  res.render('aboutUs', {activePage : {about : true}});
};
