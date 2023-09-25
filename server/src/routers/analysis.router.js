import {Router} from "express"
import { createAnalysis, getAnalysis } from "../controllers/analisys.controllers.js"

const router = Router()

router.post('/analysis',createAnalysis)

router.get('/analysis',getAnalysis)


export default router
