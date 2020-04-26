// dependencias
import express from 'express'

// controllers
import HomeController from '../controllers/home'

const router = express.Router()

router.get('/', HomeController.index)

export default router
