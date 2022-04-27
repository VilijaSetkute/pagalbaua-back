const mongoose =require('mongoose')

const pointSchema = mongoose.Schema({
    nameAlias: {type: String, required: true},
    category: {type: String, required: true},
    title: {type: String, required: true},
    locationText: {type: String, required: true},
    locationAlias: {type: String, required: true},
    address: {type: String, required: true},
    openHours: {type: String, required: true},
    phone: {type: String, required: true},
    publicTransport: {type: String, required: true},
    publicBusExpress: {type: Array, required: true},
    publicBus: {type: Array, required: true},
    publicTrolley: {type: Array, required: true},
    website: {type: String, required: true},
    linkText: {type: String, required: true},
    extrainfo: {type: String, required: true},
    donationForms: {type: Array, required: true},
})

module.exports = mongoose.model('refugees_in_lt_pickup_points', pointSchema)