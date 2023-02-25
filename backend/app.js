import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {config} from 'dotenv';

import emailRoutes from './server/routes/emailRoutes.js';

config({path:'.env'});

const app = express();
const port = process.env.PORT || 3000;

// Cors
app.use(cors({
    // origin: 'https://jeremyjfn-portfolio.netlify.app'
    origin: '*'
}));

// BodyParser
app.use(bodyParser.json());

// Log
app.use(morgan('tiny'))

// Routes
app.use('/api/emails', emailRoutes);


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI);

const DB = mongoose.connection;
DB.on('open', ()=>{
    console.log('Database Connected');
    // Run Server
    app.listen(port, () => {
        console.log(`Server running on [http://127.0.0.1:${port}]...`);
    });
});
DB.on('close', ()=>console.log('Database Disconnected'))