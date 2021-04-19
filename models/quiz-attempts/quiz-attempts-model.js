const mongoose = require('mongoose');
const quizAttemptSchema = require('./quiz-attempts-schema.js');
const quizAttemptModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptSchema
)

module.exports = quizAttemptModel