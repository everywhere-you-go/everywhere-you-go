const freeze = require('deep-freeze')
const test = require('tape')

const reducer = require('../reducer')

test('Adds a location to the state', function (t){
  const state = {
    location: {city: null},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }

  freeze(state)

  const actual = reducer(state, {type: 'ADD_LOCATION', payload: 'Melbourne'})

  t.deepEquals(actual, expected, 'Test is passing')

  t.end()
})

test('Adds a question', function(t) {
  const state = {
    location: {city: 'Melbourne'},
    questions: [
      // {location: 'Melbourne', correctTemp: 12, guessedTemp: 0, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }

  freeze(state)

  const actual = reducer(state, {type: 'ADD_QUESTION', payload: {correctTemp: 12, guessedTemp: null, correct: false, attempted: false}})

  t.deepEquals(actual, expected, 'Add question test passing')
  t.end()
})

test('Attempt a question', function(t) {
  const state = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: 12, correct: true, attempted: true}
    ],
    score: 0
  }

  freeze(state)

  const actual = reducer(state, {type: 'ATTEMPT_QUESTION', payload: {guess: 12, index: 1}})

  t.deepEquals(actual, expected, 'Attempt question test passing')
  t.end()
})

test('Increment score', function (t) {
  const state = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }

  const expected = {
    location: {city: 'Melbourne'},
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 1
  }

  freeze(state)

  const actual = reducer(state, {type: 'INCREMENT_SCORE'})

  t.deepEquals(actual, expected, 'correctly incrementing store')
  t.end()
})
