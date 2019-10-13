import React from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { LoanProvider } from './context.js'

function App() {
  return (
    <LoanProvider>
      <div className="App">
      <Main/>
      </div>
    </LoanProvider>
  );
}

export default App;
