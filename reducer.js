const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch(type){
    case 'ADD_LOCATION':
      newState.location.city = payload
      return newState
    case 'ADD_GUESS':
      payload.location = state.location.city
      newState.guesses.push(payload)
      return newState
    default:
      return newState
  }
}
