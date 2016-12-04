const React = require('react')

module.exports = UnansweredQuestion

function UnansweredQuestion (question, idx, attemptQuestion, setClass) {
  return (
    <div className={`question ${setClass}`} key={idx}>
      <p>What is the temperature in {question.city}?</p>
      <input className='guesstemp' id={`question-${idx}`}></input>
      <button type='submit' onClick={attemptQuestion}>Guess!</button>
    </div>
  )
}
