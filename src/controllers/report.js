import { Op } from 'sequelize'
import User from '../models/User'

const UserController = {}

// Encontrar todos usuários que tem email que termina com @rocketseat.com.br
// Desses usuários eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
// Desses usuários eu quero buscar as tecnologias que começam com React
UserController.show = async (req, res) => {
  const users = await User.findAll({
    attributes: ['name', 'email'],
    where: {
      email: {
        [Op.iLike]: '%@gmail.com'
      }
    },
    include: [
      {
        association: 'techs',
        required: true,
        where: {
          name: {
            [Op.iLike]: 'Vue%'
          }
        }
      }
    ]
  })

  return res.json(users)
}

export default UserController
