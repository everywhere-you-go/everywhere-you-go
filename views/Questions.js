const React = require('react')

const Questions = (props) => {
  return <div className='questions'>
          {props.questions.map((question, idx) => <div className='question'>
          <p>What is the temperature in {question.city}?</p>
            <input className='guesstemp' id={`question-${idx}`}></input>
            <button type='submit'>Guess!</button>
            </div>)}
         </div>
}

module.exports = Questions
