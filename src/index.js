import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvide} from "./Context/AuthContext"
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvide>
        <Provider store={store}>
        <App />
        </Provider>
      </AuthContextProvide>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);