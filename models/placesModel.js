const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, {timestamps: true})

const PlacesModel =  new mongoose.model('places',placesSchema)

module.exports = PlacesModel;