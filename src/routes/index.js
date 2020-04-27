// dependencias
import express from 'express'

// routes
import home from './home'
import user from './user'

const router = express.Router()

router.use('/home', home)
router.use('/users', user)

export default router
