import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducer'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
