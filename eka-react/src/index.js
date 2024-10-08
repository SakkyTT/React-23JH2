import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import AppUseEffect from './components/AppUseEffect';
import AppRouter from './components/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Vaihda tänne juuri komponentti */}
    {/* <App /> */}
    {/* <AppUseEffect /> */}
    <AppRouter />
  </React.StrictMode>
);


