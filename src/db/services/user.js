const UserModel = require('./../models/user');

module.exports.createUser = async (login, password) => {
    let created = undefined;
    await UserModel.create({ login, pass: password })
        .then(user => {
            console.log(`User: ${user.login} created`);
            return created = user;
        });
    return created;
};

module.exports.findUserByLogin = async (login) => {
    return await UserModel.findOne({login}, err => {
        if (err) return console.log(`Cannot find user ${login}`);
    });
};