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
    return await RoleModel.findById(id, err => {
        if (err) return console.log(`Cannot find user "${id}"`);
    });
};