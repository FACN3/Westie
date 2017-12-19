const express = require('express');
const path = require('path');
const router = express.Router();
const home = require('./home');
const error = require('./error');
const about = require('./about');
const contact = require('./contactUs');

router.get('/', home.get);
router.get('/aboutUs', about.get);
router.get('/contactUs', contact.get);

router.use(error.client);
router.use(error.server);


module.exports = router;
