const Category = require("./category.model.js")

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      price: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: false
      },
      stock: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      categoryId: Sequelize.INTEGER,
      supplierId: Sequelize.INTEGER,
    });
    
    return Product;
  };

  // Here we can connect countries and cities base on country code
