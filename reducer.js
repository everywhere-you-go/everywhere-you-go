const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  const {questions, score, isFinished} = newState
  switch (type) {
    case 'ADD_QUESTION':
      if (questions.length < 10){
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
      newState.isFinished = gameIsFinished(newState.questions)
      newState.score = calcScore(newState.questions)
      return newState
    case 'CALCULATE_SCORE':
      newState.score = calcScore(newState.questions)
      return newState
    case 'CLEAR_QUESTIONS':
      newState.questions = []
      newState.isFinished = false
      return newState
    default:
      return newState
  }
}

function gameIsFinished(arr) {
  let allAttempted = true
  arr.forEach((question) => {
     if (!question.attempted) {
       allAttempted = false
     }
   })
 return arr.length === 5 && allAttempted
}

function calcScore(arr) {
  return arr.reduce((previous, current) => {
    if (current.correct) return previous + 1
    else return previous
  }, 0)
}
