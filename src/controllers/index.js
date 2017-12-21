const express = require('express');
const path = require('path');
const router = express.Router();
const home = require('./home');
const error = require('./error');
const about = require('./about');
const contact = require('./contactUs');
const singlePic = require('./singlePic');
const addLike = require('./addLike');

router.get('/', home.get);
router.get('/aboutUs', about.get);
router.get('/contactUs', contact.get);
router.get('/singlePic', singlePic.get);
router.get('/addLike', addLike.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
