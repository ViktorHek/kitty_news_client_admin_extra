import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import store from './state/store/configureStore'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
