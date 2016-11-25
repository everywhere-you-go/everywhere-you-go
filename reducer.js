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
      // console.log("city in newStore is",newState.questions[1].city)
      // console.log("its temp is", newState.questions[1].correctTemp)
      // console.log("newState is", newState);
      return newState
    case 'ATTEMPT_QUESTION':
      console.log("payload is", payload);
      newState.questions[payload.index].guessedTemp = payload.guess
      newState.questions[payload.index].correct = newState.correctTemp === newState.guessedTemp
      newState.questions[payload.index].attempted = true
      return newState
    case 'INCREMENT_SCORE':
      newState.score++
      return newState
    default:
      return newState
  }
}
