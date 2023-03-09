import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {config} from 'dotenv';
// import cors from 'cors';

import emailRoutes from './server/routes/emailRoutes.js';
import adminRoutes from './server/routes/adminRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';

config({path:'.env'});

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static('build'));

// Set header
app.use((req, res, next)=>{
    res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.append('Accept', 'application/json');
    next();
});

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Log
app.use(morgan('tiny'))

// Routes
app.use('/api/emails', emailRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);

// MongoDB Connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI);

const DB = mongoose.connection;
DB.on('open', ()=>{
    console.log('Database Connected');
});
DB.on('close', ()=>console.log('Database Disconnected'))
// Run Server
app.listen(port, () => {
    console.log(`Server running on [http://127.0.0.1:${port}]...`);
});