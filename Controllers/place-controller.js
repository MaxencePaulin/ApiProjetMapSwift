const placeService = require('../Services/place-service.js');

// Read all places
exports.getAllPlaces = async (req, res) => {
    try {
        const places = await placeService.getAllPlaces();
        res.status(200).json(places);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Add one user to peopleInside mongodb
exports.addUserToPeopleInside = async (req, res) => {
    try {
        console.log('req', req.body);
        const userId = req.body.userId;
        const place = await placeService.addUserToPeopleInside(req.params.idPlace, userId);
        if (place.error) {
            return res.status(400).json(place);
        }
        res.status(200).json(place);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Remove one user to peopleInside mongodb
exports.removeUserToPeopleInside = async (req, res) => {
    try {
        console.log('req', req.body);
        const userId = req.body.userId;
        const place = await placeService.removeUserToPeopleInside(req.params.idPlace, userId);
        if (place.error) {
            return res.status(400).json(place);
        }
        res.status(200).json(place);
    } catch (err) {
        res.status(400).json(err);
    }
}