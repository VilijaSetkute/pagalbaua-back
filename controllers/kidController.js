const kidSchema = require('../models/kidSchema')

module.exports ={
    kidList: async (req, res) => {
        kidList = await kidSchema.find()
        res.send({success: true, kidList})
    },
    KidsOrgLocation: async (req, res) => {
        const {city} = req.body
        const filteredList = await kidSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    }
}