import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

export default User
