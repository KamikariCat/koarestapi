const { allRoles } = require('./../../db/services/role');

module.exports.getAllRoles = router => router.get('/role/all', async ctx => ctx.body = await allRoles());