
const { Router } = require('express');

const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/auth', authController);

module.exports = authRouter;