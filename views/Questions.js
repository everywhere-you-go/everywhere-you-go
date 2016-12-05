const React = require('react')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

const AnsweredQuestion = require('./AnsweredQuestion')

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
        if (question.attempted) {
          return AnsweredQuestion(question, idx)
        }
        return (
          <div className={`question ${setClass}`} key={idx}>
            <p>What is the temperature in {question.city}?</p>
            <form>
              <input className='guesstemp' id={`question-${idx}`}></input>
              <input type='submit' onClick={attemptQuestion} label='Guess!'></input>
            </form>
          </div>
      ) }
    )}
    </div>
  )
}

module.exports = Questions
