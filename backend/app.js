import express from 'express';
import './server/database/connection.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import emailRoutes from './server/routes/emailRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// Cors
app.use(cors({
    // origin: 'http://127.0.0.1:3000'
    origin: '*'
}));

// BodyParser
app.use(bodyParser.json());

// Log
app.use(morgan('tiny'))

// Routes
app.use('/email', emailRoutes);

app.listen(port, () => {
    console.log(`Server running on [http://127.0.0.1:${port}]...`);
});