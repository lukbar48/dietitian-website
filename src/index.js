import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from 'contexts/AuthContext';
import './index.css';
import App from './App';
import { AppProvider } from './contexts/context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
