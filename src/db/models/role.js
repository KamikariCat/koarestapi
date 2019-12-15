const DB = require('./../index');

const schema = DB.Schema;
const roleSchema = new schema({
    name: String,
    text: String,
    author: String,
    created: String,
    users: Number
});

module.exports = DB.model('role', roleSchema);