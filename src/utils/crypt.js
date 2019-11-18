const bcrypt = require('bcrypt');

module.exports.hash = async function (password) {
    let hashed = '';
    await bcrypt.hash(password, 10).then(hash => {
        hashed = hash
    });
    return hashed;
};

module.exports.compare = async function (password, hash) {
    let isMatch = false;
    await bcrypt.compare(password, hash).then(res => {
        isMatch = res;
    });
    return isMatch;
};