const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch (type) {
    case 'ADD_QUESTION':
      if (state.questions.length < 5){
        var question = {guessedTemp: null, correct: false, attempted: false, correctTemp: null}
        question.city = payload.city
        question.correctTemp = payload.correctTemp
        newState.questions.push(question)
      }
      return newState
    case 'ATTEMPT_QUESTION':
      newState.questions[payload.index].guessedTemp = payload.guess
      newState.questions[payload.index].correct = (newState.questions[payload.index].correctTemp === newState.questions[payload.index].guessedTemp)
      newState.questions[payload.index].attempted = true
      return newState
    case 'CALCULATE_SCORE':
      newState.score = newState.questions.reduce((previous, current) => {
        if (current.correct) return previous + 1
        else return previous
      }, 0)
      return newState
    case 'CHECK_FINISHED':
      let fiveQuestions = newState.questions.length === 5
      let allAttempted = true
      newState.questions.forEach((question) => {
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
