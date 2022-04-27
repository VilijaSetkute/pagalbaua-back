const mongoose =require('mongoose')

const kidSchema = mongoose.Schema({
    nameAlias: {type: String, required: true},
    category: {type: String, required: true},
    helpIcon: {type: Object, required: true},
    title: {type: String, required: true},
    locationText: {type: String, required: true},
    locationAlias: {type: String, required: true},
    receiverType: {type: String, required: true},
    donationType: {type: String, required: true},
    donationForms: {type: Array, required: true},
    website: {type: String, required: true},
    linkText: {type: String, required: true},
})

module.exports = mongoose.model('help_in_lt_kids', kidSchema)