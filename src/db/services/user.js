const UserModel = require('./../models/user');

module.exports.createUser = async (login, password) => {
    const User = new UserModel({ login, pass: password });

    await User.save((err, user) => {
        if (err) return console.log('Cannot create user');

        console.log(`User: ${user.login} created`);
        return user;
    });
};

module.exports.findUserByLogin = async (login) => {
    return await UserModel.findOne({login}, (err, user) => {
        if (err) return console.log(`Cannot find user ${login}`);

        console.log(`User: ${user.login} founded`);
    });
};