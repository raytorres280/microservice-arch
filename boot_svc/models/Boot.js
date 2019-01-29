var mongoose = require("mongoose");

var schema = mongoose.Schema;

var bootSchema = new Schema({
    serial: String,
    version: String

});