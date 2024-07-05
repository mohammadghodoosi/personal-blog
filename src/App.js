import Navbar from './Navbar';
import React from 'react';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <div className='head'>
            <Navbar />
        </div>
        <div className='content'>
            <Home />
        </div>
    </div>
  );
}

export default App;
