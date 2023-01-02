const express = require('express');
const router = express.Router();

const {
    setEvent,
    getAllEvents,
    getSingleEvent
} = require('../controller/eventsController');

router.post('/events', setEvent);
router.get('/events', getAllEvents);
router.get('/events/:id', getSingleEvent);

module.exports = router;
