import {Router} from 'express'
import { uploadFile } from '../controllers/upload';

const uploadRouter = Router()

uploadRouter.put('/', uploadFile)

export default uploadRouter