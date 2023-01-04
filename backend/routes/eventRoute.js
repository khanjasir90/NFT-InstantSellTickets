const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../utils/jwt');

const {
    setEvent,
    getAllEvents,
    getSingleEvent
} = require('../controller/eventsController');

router.post('/events', setEvent);
router.get('/events', getAllEvents);
router.get('/events/:id', authenticateToken, getSingleEvent);

module.exports = router;
