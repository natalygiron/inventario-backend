module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define("supplier", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      supplier_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      supplier_email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      supplier_address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
      },
      supplier_contact_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z]+$/i,
        }
      },
      supplier_contact_number: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
              isNumeric: true,
              len: 9
          }
      },
      supplier_contact_email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            len: 50
        }
      }
    });
    return Supplier;
  };