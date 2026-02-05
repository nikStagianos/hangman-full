const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    word: { type: String, required: true},
    guessedLetters: { type: [String], default: [] },
    attempts: { type: Number, default : 5},
    status: { type: String, enum: ['ongoing', 'win', 'lose'], default: 'ongoing'}
})

module.exports = mongoose.model("Game", gameSchema)