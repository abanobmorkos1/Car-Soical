const mongoose = require('./connection');

const carsSchema = new mongoose.Schema({
    make : String,
    model : String,
    year : Number,
});

const garage = mongoose.model('Garage', carsSchema);

module.exports = garage;