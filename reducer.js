const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch(type){
    case 'ADD_LOCATION':
      newState.location.city = payload
      return newState
    case 'ADD_QUESTION':
      payload.location = state.location.city
      newState.questions.push(payload)
      return newState
    case 'ATTEMPT_QUESTION':
      console.log(newState)
      // console.log("payload is", payload);
      newState.questions[payload.index].guessedTemp = payload.guess
      newState.questions[payload.index].correct = (newState.questions[payload.index].correctTemp == newState.questions[payload.index].guessedTemp)
      newState.questions[payload.index].attempted = true
      return newState
    case 'INCREMENT_SCORE':
      newState.score += 1
      console.log("score is", newState.score);
      return newState
    case 'CHECK_FINISHED':
      console.log("Checking if finished...")
      let fiveQuestions = newState.questions.length === 5
      let allAttempted = true
      newState.questions.forEach((question) => {
       if (!question.attempted){
         allAttempted = false
       }
     })
     newState.isFinished = fiveQuestions && allAttempted
     return newState
    case 'CLEAR_QUESTIONS':
      newState.questions = []
      return newState
    default:
      return newState
  }
}
