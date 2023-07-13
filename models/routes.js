const mongoose = require('./connection');

const routesSchema = new mongoose.Schema({
    start : String,
    end : String,
});

const routes = mongoose.model('Routes', routesSchema);

module.exports = routes;