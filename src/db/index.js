const mongoose = require('mongoose');

const { connectionLink } = require('./../config').database;

mongoose.connect(connectionLink, {useNewUrlParser: true, useUnifiedTopology: true}).then();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database is Started'));

module.exports = mongoose;
