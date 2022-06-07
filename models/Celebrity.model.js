const { Schema, model } = require('mongoose')

const celebritySchema = new Schema(
    {
        name: String,
        photo: String,
        ocupation: String,
        catchPhrase: String,
    },
    { timestamps: true }
)

module.exports = model('celebrity', celebritySchema)