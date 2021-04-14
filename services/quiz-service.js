let quizService = require('./quizzes.json')

const findAllQuizzes = () => quizService

const findQuizById = (quizId) =>
    quizService.find(quiz => quiz._id === quizId)

module.exports = {
  findAllQuizzes,
  findQuizById
}
