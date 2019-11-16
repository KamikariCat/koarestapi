const { createUser, findUserByLogin } = require('./../../db/services/user');

module.exports.registerUser = router => {
    router.post('/register', async (ctx, next) => {
        //console.log(ctx.request.body);
        if (
            !ctx.request.body.hasOwnProperty('login') ||
            !ctx.request.body.hasOwnProperty('password') ||
            !ctx.request.body.hasOwnProperty('rPassword')
        ) ctx.throw(400).then().catch(e => e);

        const {login, password, rPassword} = ctx.request.body;

        if (password !== rPassword)
            return ctx.throw(400).then().catch(e => e);

        const user = await findUserByLogin(login);

        if (!user) {
            const created = await createUser(login, password);
            console.log(created);
            ctx.body = created;
        }
        next();
    })
};