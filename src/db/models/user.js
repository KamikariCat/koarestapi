const DB = require('./../index');

const schema = DB.Schema;
const userSchema = new schema({
    login: String,
    pass: String,
    token: String
});

module.exports = DB.model('user', userSchema);