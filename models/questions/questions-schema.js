const mongoose = require("mongoose");
const questionsSchema = mongoose.Schema({
  _id: String,
  title: String,
  quizId: String,
  question: String,
  correct: String,
  type: {type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE"]},
  choices: [String]

}, {collection: "questions"});

module.exports = questionsSchema;