import { createStore } from 'redux'

const store = createStore((state = { counter: 0 }, action) => {
  switch (action && action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
})

export { store }
