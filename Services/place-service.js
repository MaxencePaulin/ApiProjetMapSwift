const { Place } = require('../Models/index.js');

// Read all places from mongoDB
exports.getAllPlaces = async () => {
    try {
        const places = await Place.find().populate({
            path: 'peopleInside',
            select: "firstName lastName email avatar"
        })
            .exec();
        return places;
    } catch (err) {
        throw err;
    }
};

// Add one user to peopleInside mongoDB
exports.addUserToPeopleInside = async (idPlace, userId) => {
    try {
        const place = await Place.findById(idPlace).exec();
        // récupérer les users déjà présents dans peopleInside pour vérifier si je n'existe pas déjà 
        const usersInside = place.peopleInside
        // si je n'existe pas déjà dans peopleInside
        if (!usersInside.includes(userId)) {
            // j'ajoute mon id à peopleInside
            place.peopleInside.push(userId);
            // je sauvegarde
            const savedPlace = await place.save();
            return savedPlace;
        } else {
            // sinon je renvoie une erreur
            return { error: true, data: 'User already inside' };
        }
    } catch (err) {
        return { error: true, data: 'Unknown error' };
    }
};

// Remove one user to peopleInside mongoDB
exports.removeUserToPeopleInside = async (idPlace, userId) => {
    try {
        const place = await Place.findById(idPlace).exec();
        const usersInside = place.peopleInside
        if (usersInside.includes(userId)) {
            place.peopleInside.pull(userId);
            const savedPlace = await place.save();
            return savedPlace;
        } else {
            return { error: true, data: 'User not inside' };
        }
    } catch (err) {
        return { error: true, data: 'Unknown error' };
    }
};