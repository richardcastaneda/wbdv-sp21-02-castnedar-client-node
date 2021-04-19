const questionsService = require('../daos/questions-dao')
module.exports = (app) => {

  const findAllQuestions = (req, res) => {
    questionsService.findAllQuestions()
    .then((questions) => {
      res.send(questions)
    })
  }
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid']
    return questionsService
    .findQuestionsForQuiz(quizId)
    .then((questions) => {
      res.send(questions)
    })
  }

  app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz);
  app.get('/api/questions', findAllQuestions);
}