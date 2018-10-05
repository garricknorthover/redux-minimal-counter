import { INCREMENT, DECREMENT } from './const'

function rootReducer (state = 0, action) {
  switch (action && action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export { rootReducer }
