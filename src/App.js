import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'

function App (props) {
  return (
    <div>
      <div>{props.state}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    state: state
  }
}

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
