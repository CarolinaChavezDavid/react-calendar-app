import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginPage } from './auth/pages/LoginPage.jsx'
import { ThemeProvider } from '@emotion/react'
import { appTheme } from './theme/AppTheme.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'
import { AppRouter } from './router/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'


const router = AppRouter()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <ThemeProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
