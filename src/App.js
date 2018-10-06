import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'

const App = ({ counter, increment, decrement }) => (
  <div>
    <div>{counter}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

export default connect(state => ({ counter: state.counter }), {
  increment,
  decrement
})(App)
