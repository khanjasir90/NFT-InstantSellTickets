const express = require('express');
const router = express.Router();

const {
    getAllEvents,
    getSingleEvent
} = require('../controller/eventsController');

router.get('/events', getAllEvents);
router.get('/events/:id', getSingleEvent);

module.exports = router;
