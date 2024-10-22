var mongoose = require('mongoose')

const schema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    gender: String,
    hobbies: Array,
    city: String
})

module.exports = mongoose.model('Friends', schema)