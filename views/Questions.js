const React = require('react')

const Questions = (props) => {
  return <div>
  <p>Hello Questions</p>
  <p>First city is: {props.questions[0].city}</p>
  </div>
}

module.exports = Questions
