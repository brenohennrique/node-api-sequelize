// dependencias
import express from 'express'

// controllers
import ReportController from '../controllers/report'

const router = express.Router()

router.get('/', ReportController.show)

export default router
