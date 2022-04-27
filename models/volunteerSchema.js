const mongoose =require('mongoose')

const volunteerSchema = mongoose.Schema({
    nameAlias: {type: String, required: true},
    category: {type: String, required: true},
    title: {type: String, required: true},
    locationText: {type: String, required: true},
    locationAlias: {type: String, required: true},
    receiverType: {type: String, required: true},
    donationType: {type: String, required: true},
    website: {type: String, required: true},
    linkText: {type: String, required: true},
    address: {type: String, required: true},
    openHours: {type: String, required: true},
    phone: {type: String, required: true},
})

module.exports = mongoose.model('help_in_lt_volunteers', volunteerSchema)