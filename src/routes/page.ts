import { Request, Response } from 'express';
import { Event } from '../schemas/event';

export const page = async (req: Request, res: Response) => {
    const events = await Event.find();

    res.json(events);
};