const itemsSchema = require('../models/itemsSchema')

module.exports ={
    itemsLTList: async (req, res) => {
        const itemsLTList = await itemsSchema.find()
        res.send({success: true, itemsLTList})
    },
    ItemOrgLocation: async (req, res) => {
        const {city} = req.body
        const filteredList = await itemsSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    }
}