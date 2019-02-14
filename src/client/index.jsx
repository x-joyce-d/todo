import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import store from '../store'
import App from './App'
import List from './List'
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
