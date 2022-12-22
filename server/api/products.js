const express = require('express');
const app = express.Router();
const { Product } = require('../db');

module.exports = app;


app.get('/', async(req, res, next)=> {
  try {
    const response = await Product.findAll();
    res.send(response);
  }
  catch(ex){
    next(ex);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    const response = await Product.findByPk(req.params.id);
    console.log(response)
  } catch (ex) {
    next(ex)
  }
})
