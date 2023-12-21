import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { store } from './store/'
import './styles.css'
import { AppTheme } from './theme'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
