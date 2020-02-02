import React from 'react';
import Router from './components/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default App;
