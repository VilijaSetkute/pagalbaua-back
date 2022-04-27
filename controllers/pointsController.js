const pointSchema = require('../models/pointSchema')

module.exports ={
    allPoints: async (req, res) => {
        const allPoints = await pointSchema.find()
        res.send({success: true, allPoints})
    }
}