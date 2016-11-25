const React = require('react')

const Questions = (props) => {
  return <div className='questions'>
          {props.questions.map((question, idx) => <div className='question'>
          <p>What is the temperature in {question.city}?</p>
            <input className='guesstemp' id={`question-${idx}`}></input>
            <button type='submit' onClick={() => {
              var guess = document.getElementById(`question-${idx}`).value
              // console.log("guess is:", guess)
              props.dispatch({type: 'ATTEMPT_QUESTION', payload: {index: idx, guess: guess}})
            }}>Guess!</button>
            </div>)}
         </div>
}

module.exports = Questions


// <input id='location'></input>
// <button type='submit' className='addquestion' onClick={() => {
//   var location = document.getElementById('location').value
//   // console.log("submitted location is", location);
//   getWeatherData(location, (res) => {
//     props.dispatch({type: 'ADD_LOCATION', payload: location})
//     props.dispatch({type: 'ADD_QUESTION', payload: {city: location, correctTemp: res.item.condition.temp, guessedTemp: null, correct: false, attempted: false}})
//   })
// }} >Go!</button>
