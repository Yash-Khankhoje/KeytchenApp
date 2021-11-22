// Inbuilt libraries and framework imports.
const mongoose = require('mongoose');

// Creating dishes schema.
const dishesSchema = mongoose.Schema({
    name : {type: String, require},
    price : {type: String, require},
    category : {type: String, require},
    image : {type: String, require},
    description : {type: String, require} 
}, {
    timestamp:true,
});

const dishesModel = mongoose.model('dishes', dishesSchema);

module.exports = dishesModel;