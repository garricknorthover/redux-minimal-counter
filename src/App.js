import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'
import styled from 'styled-components'

const App = ({ counter, increment, decrement }) => (
  <Wrapper>
    <div>Redux Counter</div>
    <div>{counter}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </Wrapper>
)

/**
 * mapping state and dispatch to props
 */

export default connect(state => ({ counter: state.counter }), {
  increment,
  decrement
})(App)

/**
 * styling stuff
 */
const Wrapper = styled.div`
  font-family: 'Helvetica', sans-serif;
  font-size:30;

`
