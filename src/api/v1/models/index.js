const dbConfig = require("../../../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./product.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.suppliers = require("./supplier.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);

const Category = db.categories; 
const Product = db.products;
const Supplier = db.suppliers;
const Order = db.orders;
const User = db.users;

Category.hasMany(Product, {foreignKey: 'categoryId', sourceKey: 'id'});
Product.belongsTo(Category, {foreignKey: 'categoryId', targetKey: 'id'});

Supplier.hasMany(Product, {foreignKey: "supplierId", sourceKey: "id"  })
Product.belongsTo(Supplier, {foreignKey: 'supplierId', targetKey: 'id'});

Supplier.hasMany(Order, {foreignKey: "supplierId", sourceKey: "id"});
Order.belongsTo(Supplier, {foreignKey: "supplierId", targetKey: "id"})

User.hasMany(Order, {foreignKey: "userId", sourceKey: "id"});
Order.belongsTo(User, {foreignKey: "userId", targetKey: "id"})



module.exports = db;