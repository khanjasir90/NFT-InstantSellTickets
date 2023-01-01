const express = require('express');
const router = express.Router();

const { getUser, login, register } = require('../controller/userController');

router.post('/user/login', login);
router.post('/user/register', register);
router.get('/user/:id', getUser);

module.exports = router;