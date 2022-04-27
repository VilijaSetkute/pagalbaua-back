const volunteerSchema = require('../models/volunteerSchema')

module.exports ={
    volunteerList: async (req, res) => {
        const volunteerList = await volunteerSchema.find()
        res.send({success: true, volunteerList})
    },
    VolunteerOrgLocation: async (req, res) => {
        const {city} = req.body
        const filteredList = await volunteerSchema.find({locationAlias: city})
        res.send({success: true, filteredList})
    }
}