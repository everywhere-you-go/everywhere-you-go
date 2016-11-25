const React = require('react')
const getWeatherData = require('../api')


const Input = (props) => {
  return <div>
            <p>Hello Input</p>
            <input id='location'></input>
            <button type='submit' className='addquestion' onClick={() => {
              var location = document.getElementById('location').value
              getWeatherData(location, (res) => {
                console.log("location is:", location);
                console.log("temp is:", res.item.condition.temp);
                props.dispatch({type: 'ADD_LOCATION', payload: location})
                props.dispatch({type: 'ADD_QUESTION', payload: {correctTemp: res.item.condition.temp, guessedTemp: null, correct: false, attempted: false}})
              })
            }} >Add question</button>
          </div>
}

module.exports = Input

// onClick={() =>{
//   getWeatherData('Wellington')
//     .then((function(response){
//       dispatch(type: 'ADD_QUESTION', payload: {correctTemp: data.item.condition.temp})
//   }))
//     .catch(function (err) {
//       console.log(err);
// })
//
  // getWeatherData(city, (response) => {
  //   dispatch({type: 'ADD_QUESTION', payload: {correctTemp: response.item.condition.temp}})
  // })
