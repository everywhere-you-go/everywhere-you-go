const React = require('react')
const {createStore} = require('redux')
const render = require('react-dom')

const reducer = require('./reducer')

const {subscribe, dispatch, getState} = createStore

const initialState = {
  location: {city: null},
  guesses: [
    {correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
  ],
  score: 0
}
