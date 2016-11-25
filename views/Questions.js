const React = require('react')

const Questions = (props) => {
  return <div>
          {props.questions.map((question) => <div className='question'>What is the temperature in {question.city}?</div>)}
         </div>
}

module.exports = Questions
