import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import 'antd/dist/antd.css'
// import { createStore } from 'redux';
// @deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

// Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.

// For more details, please read this Redux docs page:
// import reducers from './reducers';
// let store = createStore(
//   reducers,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const container = document.getElementById('root')!;
const root = createRoot(container);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
