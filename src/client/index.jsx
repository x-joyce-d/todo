import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import * as stores from '../stores'
import App from './App'

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
), document.getElementById('root'))
