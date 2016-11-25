const React = require('react')

const Questions = (props) => {
  return <div>
          {props.questions.map((question) => <div>{question.city}</div>)}
         </div>
}

module.exports = Questions
