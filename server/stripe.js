const express = require('express');
const app = express.Router();
const stripe = require('stripe')(process.env.stripe_private_key)
module.exports = app;

app.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems.map((lineItem => {
            return (
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: lineItem.product.name,
                            images: [lineItem.product.imageUrl]
                        },
                        unit_amount: lineItem.product.price*100
                    },
                    quantity: lineItem.quantity
                }
            )
        })),
        mode: 'payment',
        success_url: `http://localhost:3000/#/success/${req.body.id}`,
        cancel_url: 'http://localhost:3000/#/cancel',
      });

      res.send({url: session.url});
});