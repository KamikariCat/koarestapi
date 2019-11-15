const mongoose = require('mongoose');

const {name, user, password} = require('./../config').database;

mongoose.connect(`mongodb+srv://${user}:${password}@wow-2wrs7.mongodb.net/${name}?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database is Started'));

module.exports = mongoose;
