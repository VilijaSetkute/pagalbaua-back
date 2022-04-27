const organizationSchema = require('../models/organizationSchema')

module.exports ={
    orgList: async (req, res) => {
        const allList = await organizationSchema.find()
        res.send({success: true, allList})
    },
    addOrg: async (req, res) => {
        console.log(req.body)
        const data = req.body
        const newData = new organizationSchema(data)
        console.log(newData)
        newData.save()
        res.send({success: true, newData})
    },
    orgLocation: async (req, res) => {
        const {city} = req.body
        console.log(req.body)
        const filteredList = await organizationSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    },
}