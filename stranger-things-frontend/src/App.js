import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const DEVELOPMENT = process.env.REACT_APP_DEVELOPMENT;
  return (
    <div className="App">
      {DEVELOPMENT && <h1>{DEVELOPMENT}</h1>}
      <StrangerThings />
    </div>
  );
}

export default App;
