import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
