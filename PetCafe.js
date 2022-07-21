const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetCafeSchema = new Schema({
    status: String // OPEN, CLOSED TEMPORARILY, ... (from Google Map)
    name: String, // use Nomad version if exists, otherwise use Google Map
    area: String, // 台北市、新北市、基隆市 extract from address
    address: String, // use Google Map version
    latitude: String,
    longitude: String,
    
    pets_cat: {
        type: Number,
        required: false, // format: [value, error_message]
        min: 0,
        max: 20
    },

    pets_dog: {
        type: Number,
        required: false
        min: 0,
        max: 20
    },

    pets_other: {
        { name: String, quantity: Number } // how to implement (use another schema?)
        required: false
    },

    minimum_charge: {
        type: Number,
        required: false,
        min: 0,
        max: 1000
    },

    open_time: {
        type: String,
        required: false
    }
    // the rest of 新增咖啡廳 

    // Nomad (value is 0 = 無資料)
    wifi: Number,
    quiet: Number, 
    tasty: Number,
    cheap: Number,

    url: {
        type: String,
        required: false
    },

    // environment (required: false)
    limited_time: Boolean,
    socket: Boolean,
    standing_desk: Boolean
})

const PetCafe = mongoose.model('PetCafe', PetCafeSchema);
module.exports = PetCafe