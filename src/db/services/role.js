const RoleModel = require('./../models/role');

module.exports.allRoles = async () => {
    let roles = undefined;
    await RoleModel.find()
        .then(gotRoles => {
            return roles = gotRoles;
        });
    console.log(roles);
    return created;
};