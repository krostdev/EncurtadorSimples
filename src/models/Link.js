const { Schema, model } = require("mongoose")

const schema = new Schema({
    linkId: String,
    linkUrl: String
})

module.exports = model("Links", schema)