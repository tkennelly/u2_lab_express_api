const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    rating: { type: String, required: true},
    yearReleased: { type: Number, required: true},
    description: { type: String, required: true},
    actor: { type: Schema.Types.ObjectId, ref: 'Actor' }
  },
  { timestamps: true }
)

module.exports = Movie