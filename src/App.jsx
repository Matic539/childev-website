import React from 'react';
import AppRouter from './router';
import firebaseApp from './firebaseConfig';
import './assets/styles/App.css';

function App() {
  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  )
}

export default App
