import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialstate } from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StateProvider initState={initialstate} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>
);
