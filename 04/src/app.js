
const express = require('express');

const webService = express();

const authRouter = require('./routers/auth.router');

webService.use(authRouter);

module.exports = webService;