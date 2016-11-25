const React = require('react')

module.exports = (props) =>{
  if(props.state.isFinished){
    return <div>
      <h1>Game Over!</h1>
        <h2>Your score was {props.state.score}/5</h2>
        <button type='submit' onClick={() => props.dispatch({type:'CLEAR_QUESTIONS'})} >Try Again</button>
    </div>
  } else {
    return <h4>game in progress ...</h4>
  }

}
