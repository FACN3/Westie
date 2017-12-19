exports.get = (req,res) => {
  res.render('contactUs', {activePage : {contact : true}});
};
