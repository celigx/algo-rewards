import { useState } from 'react';
import './App.sass';

function App() {
  const [input, setInput] = useState(0)

  // Update input on change
  const inputValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="app">

      <div className="titleContainer">
        <h1 className='title'>Governance Rewards Calculator</h1>
      </div>

      <div className="container">
        <div className="inputContainer">
          <p className='title'>Enter your ALGO amount</p>
          <input type="number" placeholder='Enter ammount' className='input' onChange={inputValue} />
        </div>
      </div>

    </div>
  );
}

export default App;
