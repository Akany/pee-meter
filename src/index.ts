import express from 'express';
import { connection } from './services/database';
import { page } from './routes/page';
import { event } from './routes/event';

const app = express();
const port = 3000;

app.get('/', page);
app.use('/event', event);

connection
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });
    });

