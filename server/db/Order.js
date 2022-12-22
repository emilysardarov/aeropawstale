const conn = require('./conn');
const { STRING, BOOLEAN, UUID, UUIDV4, VIRTUAL } = conn.Sequelize;

const Order = conn.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  isCart: {
    type: BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  userId: {
    type: UUID,
    allowNull: false
  },
  serial: {
    type: VIRTUAL,
    get(){
      return this.id.slice(0, 5);
    }
  }
});

module.exports = Order;
