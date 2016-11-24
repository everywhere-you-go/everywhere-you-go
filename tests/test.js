const freeze = require('deep-freeze')
const test = require('tape')

const reducer = require('../reducer')

test('Adds a location to the state', function (t){
  const state = {
    location: {city: null},
    guesses: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: 0, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    guesses: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: 0, correct: false, attempted: false}
    ],
    score: 0
  }

  freeze(state)

  const actual = reducer(state, {type: 'ADD_LOCATION', payload: 'Melbourne'})

  t.deepEquals(actual, expected, 'Test is passing')

  t.end()
})

test('Adds a guess', function(t) {
  const state = {
    location: {city: 'Melbourne'},
    guesses: [
      // {location: 'Melbourne', correctTemp: 12, guessedTemp: 0, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    guesses: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: 14, correct: false, attempted: true}
    ],
    score: 0
  }

  freeze(state)

  const actual = reducer(state, {type: 'ADD_GUESS', payload: {correctTemp: 12, guessedTemp: 14, correct: false, attempted: true}})

  t.deepEquals(actual, expected, 'Add guess test passing')
  t.end()
})
