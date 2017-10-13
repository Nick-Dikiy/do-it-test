const express = require('express');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/doit';

mongoose.connect(mongoDB, {useMongoClient: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connect')
});
