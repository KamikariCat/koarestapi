const UserModel = require('./../models/user');
const { hash, compare } = require('./../../utils/crypt');
const uniqid = require('uniqid');

module.exports.createUser = async (login, password) => {
    let created = undefined;
    await UserModel.create({ login, pass: await hash(password), token: uniqid() })
        .then(user => {
            console.log(`User: "${user.login}" created`);
            return created = user;
        });
    return created;
};

module.exports.findUserByLogin = async (login) => {
    return await UserModel.findOne({login}, err => {
        if (err) return console.log(`Cannot find user "${login}"`);
    });
};

module.exports.loginUser = async (login, password) => {
    const founded = await UserModel.findOne({login}, err => {
        if (err) return console.log(`Cannot find user "${login}"`);
    });
    if (!founded) return;

    return await compare(password, founded.pass) ? founded.token : false;
};

module.exports.updateUserToken = async (login) => {
    let newToken = uniqid();
    await UserModel.updateOne({login}, {token: newToken}, err => {
        if (err) newToken = undefined;
    });
    return newToken;
};

module.exports.isUserTokenExists = async (login, token) => {
    const founded = await UserModel.findOne({login, token}, err => {
        if (err) return console.log(`Cannot find user "${login}"`);
    });
    if (!founded) return false;

    return founded ? token : false;
};