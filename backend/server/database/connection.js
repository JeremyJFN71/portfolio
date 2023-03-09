import mongoose from 'mongoose';
import {config} from 'dotenv';
config({path: '.env'})

// MongoDB Connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI);

const DB = mongoose.connection;
DB.on('open', ()=>{
    console.log('Database Connected');
});
DB.on('close', ()=>console.log('Database Disconnected'))