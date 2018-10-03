import React from 'react'
import styled, { css } from 'styled-components'

const Line = styled.div`
background: blue;
${props => props.other && css`
background: red;
`}
`
export default () => (
  <div>
    <h1>Tic-Tac-Toe</h1>
    <Line>hgjhg</Line>
    <Line other>hgjhg</Line>
  </div>
)

