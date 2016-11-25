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
      console.log(newState);
      return newState
    case 'ATTEMPT_QUESTION':
      newState.questions[payload.index].guessedTemp = payload.guess
      newState.questions[payload.index].correct = newState.correctTemp === newState.guessedTemp
      newState.questions[payload.index].attempted = true
      return newState
    default:
      return newState
  }
}
