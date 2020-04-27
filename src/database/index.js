import Sequelize from 'sequelize'
import dbConfig from '../config/database'

// models
import User from '../models/User'

const connection = new Sequelize(dbConfig)

User.init(connection)

export default connection
