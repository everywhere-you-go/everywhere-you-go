const React = require('react')
const {createStore} = require('redux')
const {render} = require('react-dom')

const reducer = require('./reducer')
const Guess = require('./views/Guess')

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

const {subscribe, dispatch, getState} = createStore

const initialState = {
  location: {city: 'London'},
  guesses: [
    {correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
  ],
  score: 0
}

const store = createStore(reducer, initialState)

const App = (props) =>
    <div id='app'>
        The city is London
    </div>


store.subscribe( () => {
  const state = store.getState()
  render(<App
          state={state}
          dispatch={dispatch}
          />, app)
})

store.dispatch({type: 'INIT'})
