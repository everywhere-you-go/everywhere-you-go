const freeze = require('deep-freeze')
const test = require('tape')

const reducer = require('../reducer')

test ('Adds a question', function (t) {
  const state = {
    questions: [
    ],
    score: 0
  }
  const expected = {
    questions: [
      {city: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }
  freeze(state)
  const actual = reducer(state, {type: 'ADD_QUESTION', payload: {city: 'Melbourne', correctTemp: 12}})
  t.deepEquals(actual, expected, 'Add question test passing')
  t.end()
})

test ('The reducer can attempt a question', function (t) {
  const state = {
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: false},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
    ],
    score: 0
  }
  const expected = {
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


test('Reducer can check to see if game is finised', function (t) {
  const state = {
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true}
    ],
    score: 0,
    isFinished: false
  }
  const expected = {
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true}
    ],
    score: 0,
    isFinished: true
  }
  freeze(state)
  const actual = reducer(state, {type: 'CHECK_FINISHED'})
  t.deepEquals(actual, expected, 'Can check if game is finished correctly')
  t.end()
})

test('Reducer can calculate the games score', function (t) {
  const state = {
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true}
    ],
    score: 0,
    isFinished: true
  }
  const expected = {
    questions: [
      {location: 'Melbourne', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: true, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true},
      {location: 'Brisbane', correctTemp: 12, guessedTemp: null, correct: false, attempted: true}
    ],
    score: 3,
    isFinished: true
  }
  freeze(state)
  const actual = reducer(state, {type: 'CALCULATE_SCORE'})
  t.deepEquals(actual, expected, 'Can check if game is finished correctly')
  t.end()
})
