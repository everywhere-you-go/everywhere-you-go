const React = require('react')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const {Motion, spring} = require('react-motion')

const AnsweredQuestion = require('./AnsweredQuestion')

const Questions = ({dispatch, questions}) => {
  return (
    <div className='questions'>
      <ReactCSSTransitionGroup className='questions' transitionName="question" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
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
      </ReactCSSTransitionGroup>
    </div>
  )
}

module.exports = Questions
