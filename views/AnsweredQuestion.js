const React = require('react')

const AnsweredQuestion = (question) => {
  var customClass = question.correct ? 'correct' : 'incorrect'
  return (
    <div className={`question ${customClass}`}>
      <h1>{question.city}</h1>
      <h1>{question.correctTemp}°C</h1>
      <h2>You guessed: {question.guessedTemp}°C</h2>
    </div>
  )
}

module.exports = AnsweredQuestion
