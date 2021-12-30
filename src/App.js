import { useEffect, useState } from 'react';
import './App.sass';

function App() {
  const [committedStake, setCommittedStake] = useState(0)
  const [rewardPoolAmount, setRewardPoolAmount] = useState(0)
  const [input, setInput] = useState(0)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch("https://governance.algorand.foundation/api/periods/governance-period-1/")
    .then(response => response.json())
    .then(response => {
      setCommittedStake(response.total_committed_stake)
      setRewardPoolAmount(response.algo_amount_in_reward_pool)
    });
  }

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
