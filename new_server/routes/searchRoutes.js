const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');
const imageController = require('../controllers/imageController');

router.post('/searchfiltered', searchController.search);
router.get('/img/:id', imageController.getImg);

module.exports = router;
