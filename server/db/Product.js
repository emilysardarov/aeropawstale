const conn = require('./conn');
const { STRING, UUID, UUIDV4, TEXT, INTEGER, DECIMAL, ENUM} = conn.Sequelize;


const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: DECIMAL(10,2),
    allowNull: false,
    validate: {
      isDecimal: true,
      isPositive: (value)=> {
        if(value <= 0){
          throw 'price must be positive'
        }
      }
    }
  },
  description: { 
    type: TEXT,
    allowNul: false
  },
  stock: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      isInt: true
    }
  },
  imageUrl: {
    type: STRING,
    validate: {
        isUrl: true
    }
  },
  petType: {
    type: ENUM,
      values: ['cat', 'dog'],
      defaultValue:'cat'
  },
  category: {
    type: ENUM,
    values: ['food', 'toy', 'accessory'],
    defaultValue:'food'
  }
});


module.exports = Product;
