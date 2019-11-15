const Router = require('koa-router');

const Main = require('./main');

module.exports = function () {
    const router = new Router();

    for (const route in Main) if (Main.hasOwnProperty(route)) Main[route](router);

    return router;
};