const mongoose = require("mongoose");
var conn = mongoose.Collection;
var EventSchema=new mongoose.Schema({
    image: {
        type:String,
    },
    eventType: {
        type:String,
    },
    eventName: {
        type:String,
    },
    eventDate: {
        type: String,
    },
    eventOrganizer: {
        type: String,
    },
    salePeriod: {
        type: String,
    },
    price: {
        type: Number,
    },
    likes: {
        type: Number
    },

},
{ timestamps: true }
);

var Event=mongoose.model('Event',EventSchema);
module.exports=Event;