module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      shipping: {
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
      },
      supplierId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
    });
    return Order;
  };