const React = require('react')

// const UnansweredQuestion = require('UnansweredQuestion')

const Questions = ({dispatch, questions}) => {
  return (
    <div className='questions'>
      {questions.map((question, idx) => {
        var customClass = (question.attempted && question.correct) ? 'correct' : 'incorrect'
        var setClass = question.attempted ? customClass : ''

        function attemptQuestion (e) {
          e.preventDefault()
          var guess = document.getElementById(`question-${idx}`).value
          dispatch({type: 'ATTEMPT_QUESTION', payload: {index: idx, guess: guess}})
        }
        return(
          <div className={`question ${setClass}`} key={idx}>
            <p>What is the temperature in {question.city}?</p>
            <input className='guesstemp' id={`question-${idx}`}></input>
            <button type='submit' onClick={attemptQuestion}>Guess!</button>
          </div>
      )}
    )}
    </div>
  )
}

module.exports = Questions
