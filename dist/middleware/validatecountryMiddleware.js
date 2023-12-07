"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateCountryMiddleware = (req, res, next) => {
    const teams = req.body;
    if (!Array.isArray(teams)) {
        return res.status(400).json({ message: 'Please pass array of teams' });
    }
    for (const team of teams) {
        if (!team.country || !team.captain || !team.playersName) {
            return res.status(400).json({ message: 'Please pass all field value' });
        }
        //     try {
        //         team.playersName = JSON.parse(team.playersName);
        //         if (typeof (team.playersName) !== "string") {
        //             throw new Error();
        //         }
        //     } catch (error) {
        //         return res.status(400).json({ message: 'Invalid playersName format. It should be a JSON array.' });
        //     }
    }
    req.processedTeams = teams;
    next();
};
exports.default = validateCountryMiddleware;
