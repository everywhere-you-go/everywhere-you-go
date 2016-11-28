const React = require('react')

const Questions = (props) => {
  return <div className='questions'>
          {props.questions.map((question, idx) => {
            var customClass = (question.attempted && question.correct) ? 'correct' : 'incorrect'
            var setClass = question.attempted ? customClass : ""
            return <div className={`question ${setClass}`} key={idx}>
            <p>What is the temperature in {question.city}?</p>
              <input className='guesstemp' id={`question-${idx}`}></input>
              <button type='submit' onClick={() => {
                var guess = document.getElementById(`question-${idx}`).value
                // console.log("guess is:", guess)
                props.dispatch({type: 'ATTEMPT_QUESTION', payload: {index: idx, guess: guess}})
                props.dispatch({type: 'CHECK_FINISHED'})
                props.dispatch({type: 'CALCULATE_SCORE'})
              }}>Guess!</button>
              </div>}) }
           </div>
}

module.exports = Questions
