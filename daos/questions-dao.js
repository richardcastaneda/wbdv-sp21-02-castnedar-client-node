const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => {
  return questionsModel.find()
}
const findQuestionById = (qid) => {
  return questionsModel.findById(qid)
}

const findQuestionsForQuiz = (quizId) => {
  return questionsModel.find({quizId: quizId})
}

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz
}