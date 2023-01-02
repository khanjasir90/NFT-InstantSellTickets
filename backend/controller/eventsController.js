const mongoose = require('mongoose');
const Event = require('../models/Event');


const setEvent = async(req,res,next) => {
    const {
        eventType,
        eventName,
        eventDate,
        eventOrganizer,
        salePeriod,
        price
    } = req.body;

    try {
        const event = new Event({
            image: 'imagefilename',
            eventType: eventType,
            eventName: eventName,
            eventDate: eventDate,
            eventOrganizer: eventOrganizer,
            salePeriod: salePeriod,
            price: price,
            like: 0

        });

        await event.save();

        return res.status(200).json({
            msg: 'event registered successfully',
            data: ''
        });

    } catch(err) {
        return res.status(500).json({
            msg: 'Error occured wile registering an event',
            data: ''
        });
    }

}

const getAllEvents = async(req,res,next) => {
    const events = await Event.find({});
    return res.status(200).json({
        msg: '',
        data: events
    });
}

const getSingleEvent = async(req,res,next) => {
    const { id } = req.param;
    const event = await Event.findById(id);
    return res.status(200).json({
        msg: '',
        data: event
    });
}

module.exports = {
    setEvent,
    getAllEvents,
    getSingleEvent
};