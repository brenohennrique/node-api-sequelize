// dependencias
import express from 'express'

// controllers
import UserController from '../controllers/user'

const router = express.Router()

router.get('/', UserController.index)
router.post('/', UserController.store)

export default router
