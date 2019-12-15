const RoleModel = require('./../models/role');

module.exports.allRoles = async () => {
    let roles = undefined;
    await RoleModel.find()
        .then(gotRoles => {
            return roles = gotRoles;
        });
    return roles;
};