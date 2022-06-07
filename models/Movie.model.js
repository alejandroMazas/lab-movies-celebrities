const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
    {
        title: String,
        cover: String,
        genre: String,
        plot: String,
        cast: [{ type: Schema.Types.ObjectId, ref: 'celebrity' }]
    },
    { timestamps: true }
)

module.exports = model('movies', movieSchema)