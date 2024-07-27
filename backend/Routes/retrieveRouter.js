import express from 'express';
import { retrieveInfo } from '../Controllers/retrieveInfo.js';

const retrieveRouter = express.Router();

retrieveRouter.get('/info', retrieveInfo);

export default retrieveRouter;
