const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem  = require('./LineItem');

const PaymentDetails = require('./PaymentDetails');
const userSyncSeed = require('./syncSeed/userSeed');
const productSeed = require('./syncSeed/productSeed');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
PaymentDetails.belongsTo(Order);
LineItem.belongsTo(Product);

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const [moe, lucy, larry, ethyl] = await userSyncSeed();
  
  const [foo, bar, bazz] = await productSeed();

  const cart = await ethyl.getCart();

  await moe.addToCart({ product: bazz, quantity: 3 });
  await moe.addToCart({ product: foo, quantity: 2 });
  await moe.createOrder();
  await moe.addToCart({ product: bazz, quantity: 3 });
  await moe.addToCart({ product: foo, quantity: 2 });
  await moe.createOrder();

  await ethyl.addToCart({ product: bazz, quantity: 3 });
  await ethyl.addToCart({ product: foo, quantity: 2 });
  return {
    users: {
      moe,
      lucy,
      larry,
    },
    products: {
      foo,
      bar,
      bazz,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
  Order
};
