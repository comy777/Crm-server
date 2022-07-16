import {Router} from 'express'
import { check } from 'express-validator'
import { getCampaña, getCampañas } from '../controllers/campaña'
import validate from '../middlewares/validate';

const campañaRouter = Router()

campañaRouter.get('/', getCampañas)

campañaRouter.get('/:id', [check('id', 'El id de la campaña es requerido'), validate], getCampaña)

export default campañaRouter;