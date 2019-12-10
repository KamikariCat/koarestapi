const Router = require('koa-router');

const User = require('./user');

module.exports = function () {
    const router = new Router();

    for (const route in User) if (User.hasOwnProperty(route)) User[route](router);

    router.use((ctx, next) => { // :TODO:
        if (
            !ctx.request.headers.hasOwnProperty('authorization') && ctx.path !== '/register'
        )
        {
            ctx.ststus = 401;
            ctx.body = 'Token or login was not exists';
        } else {
            next();
        }
    });

    return router;
};