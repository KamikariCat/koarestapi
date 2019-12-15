const Router = require('koa-router');

const Role = require('./role');

module.exports = function () {
    const router = new Router();

    for (const route in Role) if (Role.hasOwnProperty(route)) Role[route](router);

    router.use((ctx, next) => {
        if (!ctx.request.headers.hasOwnProperty('authorization'))
        {
            ctx.ststus = 401;
            ctx.body = 'Token or login was not exists';
        } else {
            next();
        }
    });

    return router;
};