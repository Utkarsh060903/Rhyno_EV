import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/db.js';
import preBookRouter from './Routes/PreBookRoute.js';
import retrieveRouter from './Routes/retrieveRouter.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use('/api', preBookRouter);
app.use('/api', retrieveRouter);

connectDB();

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
