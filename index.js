const React = require('react')
const {createStore} = require('redux')
const render = require('react-dom')

const reducer = require('./reducer')

const {subscribe, dispatch, getState} = createStore

const initialState = {
  location: {city: },
  guesses: [
    {correctTemp: 12, guessedTemp: 0, correct: false, attempted: false},
    {correctTemp: 13, guessedTemp: 0, correct: false, attempted: false}
  ],
  score: 0
}
