const RoleModel = require('./../models/role');

module.exports.getAllRoles = async () => {
    let roles = undefined;
    await RoleModel.find()
        .then(gotRoles => {
            return roles = gotRoles;
        });
    console.log(roles);
    return created;
};