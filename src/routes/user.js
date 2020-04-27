// dependencias
import express from 'express'

// controllers
import UserController from '../controllers/user'
import AddressController from '../controllers/address'

// routes
const router = express.Router()

router.get('/', UserController.index)
router.post('/', UserController.store)

// addresses
router.post('/:user_id/addresses', AddressController.store)
router.get('/:user_id/addresses', AddressController.index)

export default router
