const Router = require('koa-router');

const User = require('./user');

module.exports = function () {
    const router = new Router();

    router.use((ctx, next) => { // :TODO:
        if (!ctx.request.headers.hasOwnProperty('token') ||
        !ctx.request.headers.hasOwnProperty('login')) {
            ctx.ststus = 401;
            ctx.body = 'Token or login was not exists';
        } else {
            next();
        }
    });

    for (const route in User) if (User.hasOwnProperty(route)) User[route](router);

    return router;
};