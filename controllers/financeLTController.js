const financeLTSchema = require('../models/financeLTSchema')

module.exports ={
    financeLTList: async (req, res) => {
        const financeLtList = await financeLTSchema.find()
        res.send({success: true, financeLtList})
    },
    FinanceOrgLocation: async (req, res) => {
        const {city} = req.body
        const filteredList = await financeLTSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    }
}