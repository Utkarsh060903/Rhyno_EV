import express from 'express'
import { PreBook } from '../Controllers/PreBook.js'

const preBookRouter = express.Router();

preBookRouter.post('/prebook' , PreBook)

export default preBookRouter