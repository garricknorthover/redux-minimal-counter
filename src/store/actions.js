const increment = payload => ({
  type: 'INCREMENT',
  payload
})

const decrement = payload => ({
  type: 'DECREMENT',
  payload
})

export { increment, decrement }
