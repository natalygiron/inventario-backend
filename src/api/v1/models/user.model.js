module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      mobile_number: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
              isNumeric: true,
              len: 9
          }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            len: 50
        }
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
          len: [8-50],
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/
      }
    });
    return User;
  };