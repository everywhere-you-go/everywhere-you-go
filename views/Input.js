const React = require('react')
const getWeatherData = require('../api/getWeather')

const Input = (props) => {
  return (
    <div>
      <h4>Enter a city:</h4>
      <input id='location'></input>
      <button type='submit' className='addquestion' onClick={() => {
        var location = document.getElementById('location').value
        getWeatherData(location)
          .then(response => props.dispatch({type: 'ADD_QUESTION', payload: {city: location, correctTemp: response.item.condition.temp}}))
          .then(() => props.dispatch({type: 'CHECK_FINISHED'}))
          .catch((error) => console.log(error))
      }
    } >Go!</button>
    </div>
  )
}

module.exports = Input

// location, (res) => {
//   props.dispatch({type: 'ADD_LOCATION', payload: location})
//   props.dispatch({type: 'ADD_QUESTION', payload: {city: location, correctTemp: res.item.condition.temp, guessedTemp: null, correct: false, attempted: false}})
// }

// props.dispatch({type: 'CHECK_FINISHED'})
// , guessedTemp: null, correct: false, attempted: false
