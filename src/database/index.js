import Sequelize from 'sequelize'
import dbConfig from '../config/database'

// models
import User from '../models/User'
import Address from '../models/Address'
import Tech from '../models/Tech'

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Tech.init(connection);

Address.associate(connection.models)
User.associate(connection.models)
Tech.associate(connection.models)

export default connection
