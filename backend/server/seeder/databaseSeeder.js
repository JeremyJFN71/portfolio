import mongoose from 'mongoose';
import {config} from 'dotenv';
config({path: '.env'})

import adminSeeder from './adminSeeder.js';

// MongoDB Connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI);

const DB = mongoose.connection;
DB.on('open', async ()=>{
    console.log('Database Connected\n');

    await adminSeeder();

    DB.close();
});
DB.on('close', ()=>console.log('\nDatabase Disconnected'));