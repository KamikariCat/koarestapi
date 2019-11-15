const MainRouter = require('./main');
const UserRouter = require('./user');

module.exports = function () {
    this
        .use(MainRouter().routes())
        .use(UserRouter().routes())
        .use(MainRouter().allowedMethods())
        .use(UserRouter().allowedMethods());
};