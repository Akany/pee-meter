import mongoose from 'mongoose';

const URI = 'mongodb+srv://sifmori:VrD4Gl1sBTEVTWow@cluster0.4sr8gav.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'pee-meter';

export const connection = mongoose.connect(URI, { dbName: DB_NAME });
