import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={style.body}>
      <App />
    </div>
  </React.StrictMode>
);

