const React = require('react')
const getWeatherData = require('../api')


const Input = (props) => {
  return <div>
            <h4>Enter a city:</h4>
            <input id='location'></input>
            <button type='submit' className='addquestion' onClick={() => {
              var location = document.getElementById('location').value
              // console.log("submitted location is", location);
              getWeatherData(location, (res) => {
                props.dispatch({type: 'ADD_LOCATION', payload: location})
                props.dispatch({type: 'ADD_QUESTION', payload: {city: location, correctTemp: res.item.condition.temp, guessedTemp: null, correct: false, attempted: false}})
              })
            }} >Go!</button>
          </div>
}

module.exports = Input
