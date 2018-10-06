import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'
import styled from 'styled-components'

const Button = styled.button`
background-color: papayawhip;

`
const Circle = styled.div`
  border-radius: 100px;
  background-color: papayawhip;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = ({ counter, increment, decrement }) => (
  <div>
    <Circle>{counter}</Circle>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
  </div>
)

export default connect(state => ({ counter: state.counter }), {
  increment,
  decrement
})(App)
