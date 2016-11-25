const React = require('react')
const getWeatherData = require('../api')


const Input = (props) => {
  return <div>
            <p>Hello Input</p>
            <input id='location'></input>
            <button type='submit' className='addquestion' onClick={() => {
              var location = document.getElementById('location').value
              getWeatherData(location, (res) => {
                props.dispatch({type: 'ADD_LOCATION', payload: location})
                props.dispatch({type: 'ADD_QUESTION', payload: {correctTemp: res.item.condition.temp, guessedTemp: null, correct: false, attempted: false}})
              })
            }} >Add question</button>
          </div>
}

module.exports = Input
