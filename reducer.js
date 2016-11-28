const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  const {questions, score, isFinished} = newState
  switch (type) {
    case 'ADD_QUESTION':
      if (questions.length < 5){
        var question = {guessedTemp: null, correct: false, attempted: false, correctTemp: null}
        question.city = payload.city
        question.correctTemp = payload.correctTemp
        newState.questions.push(question)
      }
      return newState
    case 'ATTEMPT_QUESTION':
      questions[payload.index].guessedTemp = payload.guess
      questions[payload.index].correct = (questions[payload.index].correctTemp === questions[payload.index].guessedTemp)
      questions[payload.index].attempted = true
      return newState
    case 'CALCULATE_SCORE':
      newState.score = questions.reduce((previous, current) => {
        if (current.correct) return previous + 1
        else return previous
      }, 0)
      return newState
    case 'CHECK_FINISHED':
      let fiveQuestions = questions.length === 5
      let allAttempted = true
      questions.forEach((question) => {
       if (!question.attempted) {
         allAttempted = false
       }
     })
     newState.isFinished = fiveQuestions && allAttempted
     return newState
    case 'CLEAR_QUESTIONS':
      newState.questions = []
      newState.isFinished = false
      return newState
    default:
      return newState
  }
}
