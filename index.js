const React = require('react')
const {createStore} = require('redux')
const {render} = require('react-dom')

const reducer = require('./reducer')
const Input = require('./views/Input')
const Questions = require('./views/Questions')
const Finish = require('./views/Finish')
const Nav = require('./views/Nav')

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

const initialState = {
  questions: [],
  score: 0,
  isFinished: false
}

const store = createStore(reducer, initialState)

const App = (props) =>
    <div id='app'>
      <Nav/>
      <h1 className='header'>Everywhere you go ...</h1>
      <Input dispatch={props.dispatch}/>
      <Finish dispatch={props.dispatch} state={props.state}/>
      <Questions dispatch={props.dispatch} questions={props.state.questions}/>
    </div>

store.subscribe( () => {
  const state = store.getState()
  render(<App state={state} dispatch={store.dispatch}/>, app)
})

store.dispatch({type: 'INIT'})
