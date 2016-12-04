const React = require('react')
const getWeatherData = require('../api/getWeather')
const citiesArray = require('../data/cities')

const Input = (props) => {
  function createQuestion (e) {
    e.preventDefault()
    var location = document.getElementById('location').value
    getWeatherData(location)
      .then(response => props.dispatch({type: 'ADD_QUESTION', payload: {city: location, correctTemp: response.item.condition.temp}}))
      .catch(error => console.log(error))
  }
  function createRandomQuestion (e) {
    e.preventDefault()
    var randomCity = citiesArray[Math.floor(Math.random() * citiesArray.length)]
    getWeatherData(randomCity)
      .then(response => {
        console.log(response)
        props.dispatch({type: 'ADD_QUESTION', payload: {city: randomCity, correctTemp: response.item.condition.temp}})
      })
      .catch(error => console.log(error))
  }
  function create5RandomQuestions (e) {
    e.preventDefault()
    var randomPromises = []
    for (var i = 0; i < 5; i++) {
      randomPromises.push(getWeatherData(citiesArray[Math.floor(Math.random() * citiesArray.length)]))
    }
    console.log('randomPromises:', randomPromises)
    Promise.all(randomPromises)
      .then(responses => {
        responses.forEach(response => {
          props.dispatch({type: 'ADD_QUESTION', payload: {city: response.location.city, correctTemp: response.item.condition.temp}})
        })
      })
  }
  function clearQuestions (e) {
    e.preventDefault()
    props.dispatch({type: 'CLEAR_QUESTIONS'})
  }
  /** REACT COMPONENT **/
  return (
    <div className='input container'>
      <h4>Enter a city:</h4>
      <form>
        <input id='location'></input>
        <input type='submit' className='addquestion' onClick={createQuestion} label='Go!'></input>
      </form>
      <button onClick={createRandomQuestion}>Random</button>
      <button onClick={clearQuestions}>Clear Questions</button>
      <button onClick={create5RandomQuestions}>Generate All Questions</button>
    </div>
  )
}

module.exports = Input
