const express = require('express');
const router = express.Router();

const getUser = require('../controller/userController');

router.get('/user/:id', getUser);

module.exports = router;