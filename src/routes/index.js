const MainRouter = require('./main');
const UserRouter = require('./user');
const RoleRouter = require('./role');

module.exports = function () {
    this
        .use(MainRouter().routes())
        .use(MainRouter().allowedMethods())

        .use(UserRouter().routes())
        .use(UserRouter().allowedMethods())

        .use(RoleRouter().routes())
        .use(RoleRouter().allowedMethods())
};