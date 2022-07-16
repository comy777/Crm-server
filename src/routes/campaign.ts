import {Router} from 'express'
import { check } from 'express-validator'
import { getCampaign, getCampaigns } from '../controllers/campaign'
import validate from '../middlewares/validate';

const campaignRouter = Router()

campaignRouter.get('/', getCampaigns)

campaignRouter.get('/:id', [check('id', 'El id de la campaña es requerido'), validate], getCampaign)

export default campaignRouter;