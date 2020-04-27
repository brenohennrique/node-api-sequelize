import User from '../models/User'

const UserController = {}

UserController.store = async (req, res) => {
  const { name, email } = req.body

  const user = await User.create({ name, email })

  return res.json(user)
}

UserController.index = async (req, res) => {
  const users = await User.findAll()

  return res.json(users)
}

export default UserController
