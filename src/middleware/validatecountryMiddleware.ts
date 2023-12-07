import { Request, Response, NextFunction } from 'express';

const validateCountryMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    const teams: any[] = req.body;
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
        (req as any).processedTeams = teams;
        next();
    };

    export default validateCountryMiddleware;
