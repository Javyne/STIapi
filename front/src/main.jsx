import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRouter } from './routes/MainRouter'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppTheme } from './themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <MainRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
