const { allRoles, getRoleById } = require('./../../db/services/role');

module.exports.getAllRoles = router => router.get('/role/all', async ctx => ctx.body = await allRoles());

module.exports.getRole = router => router.get('/role/:id', async ctx => {
    const role = await getRoleById(ctx.params.id);

    if (!role) return ctx.status = 400;

    ctx.body = role;
});