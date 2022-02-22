module.exports = (sequelize, Sequelize) => {
    const OrderLine = sequelize.define('orderLine', {
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        quantity: Sequelize.INTEGER,
        productId: Sequelize.INTEGER,
        orderId: Sequelize.INTEGER,
      });
    return OrderLine;
  };