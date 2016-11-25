const React = require('react')
const {createStore} = require('redux')
const {render} = require('react-dom')

const reducer = require('./reducer')
const Input = require('./views/Input')
const Questions = require('./views/Questions')

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)


const initialState = {
  location: {city: 'London'},
  questions: [
    {city: 'London', correctTemp: 12, guessedTemp: null, correct: false, attempted: false}
  ],
  score: 0
}

const store = createStore(reducer, initialState)

const App = (props) =>
    <div id='app'>
        <p>The city is {props.state.questions[0].city}</p>
        <Input dispatch={props.dispatch}/>
        <Questions dispatch={props.dispatch}/>
    </div>


store.subscribe( () => {
  const state = store.getState()
  render(<App
          state={state}
          dispatch={store.dispatch}
          />, app)
})

store.dispatch({type: 'INIT'})
