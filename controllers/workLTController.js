const workLTSchema = require('../models/workLTSchema')

module.exports ={
    workLTList: async (req, res) => {
        const workLtList = await workLTSchema.find()
        res.send({success: true, workLtList})
    },
    WorkOrgLocation: async (req, res) => {
        const {city} = req.body
        const filteredList = await workLTSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    }
}