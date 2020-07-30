const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
// new variable set to new schema object takes in object literal with the fields we want
const ItemSchema  = new Schema({
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);
