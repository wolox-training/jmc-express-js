module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'users',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
        validate: {
          notEmpty: true,
          len: [1, 50]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 50],
          field: 'last_name'
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
          len: [1, 255]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      UpdatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      indexes: [{ unique: true, fields: ['email'] }]
    }
  );
  return model;
};
