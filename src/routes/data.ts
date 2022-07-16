import {Router} from 'express'
import { getDataCrm } from '../controllers/upload';

const dataRouter = Router()

dataRouter.get('', getDataCrm)

export default dataRouter;