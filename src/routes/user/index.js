const Router = require('koa-router');

const User = require('./user');

module.exports = function () {
    const router = new Router();

    for (const route in User) if (User.hasOwnProperty(route)) User[route](router);

    return router;
};