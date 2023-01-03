const mongoose = require('mongoose');
const Event = require('../models/Event');

const home = async(req, res, next) => {
    const events = await Event.find({});
    let arrEvents = [];
    for(let i=0;i<events.length;i++) {
        let eventObj = {};
        eventObj.eventId = events[i]._id;
        eventObj.eventName = events[i].eventName;
        eventObj.price = events[i].price;
        eventObj.eventDate = events[i].eventDate;
        eventObj.likes = events[i].likes;
        arrEvents.push(eventObj);
    }
    return res.status(200).json({
        msg:'',
        data: arrEvents
    })
}

module.exports = {
    home
};