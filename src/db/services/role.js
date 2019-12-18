const RoleModel = require('./../models/role');

module.exports.allRoles = async () => {
    let roles = undefined;
    await RoleModel.find()
        .then(gotRoles => {
            return roles = gotRoles;
        });
    return roles;
};

module.exports.getRoleById = async (id) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) return;
    return await RoleModel.findById(id, err => {
        if (err) return console.log(`Cannot find user "${id}"`);
    });
};