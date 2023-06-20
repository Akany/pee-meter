import { Router } from 'express';
import { Event } from '../schemas/event';

export const event = Router();

event.get('/', async (req, res) => {
    await new Event().save();

    res.redirect('/');
});
