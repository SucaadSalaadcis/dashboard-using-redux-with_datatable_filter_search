const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    image: String,
    size: String,
    price: String
});


module.exports = mongoose.model('category', categorySchema);