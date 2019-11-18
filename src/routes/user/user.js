const { createUser, findUserByLogin, loginUser, updateUserToken, isUserTokenExists } = require('./../../db/services/user');

module.exports.registerUser = router => {
    router.post('/register', async (ctx, next) => {
        if (
            !ctx.request.body.hasOwnProperty('login') ||
            !ctx.request.body.hasOwnProperty('password') ||
            !ctx.request.body.hasOwnProperty('rPassword')
        ) {
            ctx.ststus = 400;
            ctx.body = 'Login or password is empty or passwords do not match.';
            return await next();
        }

        const {login, password, rPassword} = await ctx.request.body;

        if (password !== rPassword)
            return ctx.ststus = 400;
        const user = await findUserByLogin(login);

        if (!user) {
            const created = await createUser(login, password);
            ctx.status = 201;
            ctx.body = {token : created.token};
        } else {
            ctx.status = 400;
            ctx.body = "User already exists"
        }
        next();
    })
};

module.exports.loginUser = router => {
    router.post('/login', async (ctx, next) => {
        if (
            !ctx.request.body.hasOwnProperty('login') ||
            !ctx.request.body.hasOwnProperty('password')
        ) {
            ctx.ststus = 400;
            ctx.body = 'Login or password is empty or passwords do not match.';
            return await next();
        }

        const {login, password} = await ctx.request.body;

        const token = await loginUser(login, password);

        if (!token) {
            ctx.status = 401;
            ctx.body = "Unknown user"
        } else {
            const newToken = await updateUserToken(login);
            ctx.status = 200;
            ctx.body = newToken ? {newToken} : null;
        }
        next();
    })
};

module.exports.isLoggedUser = router => {
    router.get('/islogin', async (ctx, next) => {
        if (
            !ctx.request.headers.hasOwnProperty('login') ||
            !ctx.request.headers.hasOwnProperty('token')
        ) {
            ctx.ststus = 401;
            ctx.body = 'Token or login was not exists';
            return await next();
        }

        const headers = await ctx.request.headers;

        const token = await isUserTokenExists(headers.login, headers.token);

        if (!token) {
            ctx.status = 401;
            ctx.body = "Unknown user"
        } else {
            ctx.status = 200;
            ctx.body = token ? {token} : null;
        }
        next();
    })
};
