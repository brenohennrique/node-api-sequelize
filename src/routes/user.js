// dependencias
import express from 'express'

// controllers
import UserController from '../controllers/user'
import AddressController from '../controllers/address'
import TechController from '../controllers/tech'

// routes
const router = express.Router()

router.get('/', UserController.index)
router.post('/', UserController.store)

// addresses
router.post('/:user_id/addresses', AddressController.store)
router.get('/:user_id/addresses', AddressController.index)

// techs
router.post('/:user_id/techs', TechController.store)
router.get('/:user_id/techs', TechController.index)
router.delete('/:user_id/techs', TechController.delete)

export default router
