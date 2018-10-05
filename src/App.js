import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'

function App ({ state, increment, decrement }) {
  return (
    <div>
      <div>{state}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default connect(
  function (state) {
    return {
      state: state
    }
  },
  {
    increment: increment,
    decrement: decrement
  }
)(App)
