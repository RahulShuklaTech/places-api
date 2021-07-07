const placesRef = require("../models/placesModel")
const showPlaces = async () => {
    let places = await placesRef.find({});
    return places
}

const showPlacesByName = async (name) => {
    try {
        let places = await placesRef.find({ name });
        return { status: true, data: places }
    } catch (e) {
        return { status: false, data: e.message }
    }

}


const showPlacesByCity = async (city) => {
    try {
        let places = await placesRef.find({ city });
        return { status: true, data: places }
    } catch (e) {
        return { status: false, data: e.message }
    }
}

const getPlace = async (name) => {
    try {
        let place = await placesRef.findOne({ name });
        return { status: true, data: place }
    } catch (e) {
        return { status: false, data: e.message }
    }

}


const addPlace = async (recieved) => {
    try {
        const place = new placesRef(recieved);
        await place.save();
        return { status: true, data: place }
    } catch (e) {
        console.log("error", e.message)
        return { status: false, data: e.message }
    }
}

module.exports = { addPlace, getPlace, showPlaces, showPlacesByCity, showPlacesByName }