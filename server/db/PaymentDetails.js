const conn = require('./conn');
const { STRING, UUID, UUIDV4, INTEGER, TIMESTAMP } = conn.Sequelize;

const PaymentDetails = conn.define('paymentDetails', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    OrderId: {
        type: UUID,
        allowNull: false
    },
    status: {
        type: STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    last4CC:{
        type: INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = PaymentDetails;