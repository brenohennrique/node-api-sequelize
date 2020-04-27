// dependencias
import express from 'express'

// routes
import home from './home'
import user from './user'
import report from './report'

const router = express.Router()

router.use('/home', home)
router.use('/users', user)
router.use('/reports', report)

export default router
