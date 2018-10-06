import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'
import styled from 'styled-components'

const App = ({ counter, increment, decrement }) => (
  <Wrapper>
    <h1>Redux<br />Counter</h1>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
    <Counter>{counter}</Counter>
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
  font-size:30px;
  padding: 30px;
  display: flex;
`

const Button = styled.button`
  font-size:50px;
  background-color: transparent;
  border:0;
  padding:25px
`
const Counter = styled.div`
  font-size: 70px
  align-self: center;
  padding:20px

`
