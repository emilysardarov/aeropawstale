const express = require('express');
const { user } = require('pg/lib/defaults');
const app = express.Router();
const { User } = require('../db');

module.exports = app;

app.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

app.put('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    await user.update(req.body.user);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

app.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.sendStatus(201);
  } catch (ex) {
    console.log(ex)
    next(ex);
  }
});
