import { useEffect, useState } from 'react';
import './App.sass';
import Output from './components/OutputData';

function App() {
  const [committedStake, setCommittedStake] = useState(0)
  const [rewardPoolAmount, setRewardPoolAmount] = useState(0)
  const [input, setInput] = useState(0)
  const [governanceAPR, setGovernanceAPR] = useState(0)
  const [governanceRewards, setGovernanceRewards] = useState(0)

  useEffect(() => {
    getData()
    calculateGovernanceAPR()
    calculateGovernanceRewards()
  }, [input, committedStake, rewardPoolAmount, governanceAPR, governanceRewards])

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

  const calculateGovernanceAPR = () => {
    const governorCount = committedStake / 1000000
    const rewardPool = rewardPoolAmount / 1000000
    const APR = Number((rewardPool / governorCount) * 100 * 4)
    
    setGovernanceAPR(APR)
  }

  const calculateGovernanceRewards = () => {
    const rewards = (input * governanceAPR / 100) / 12 * 3
    
    setGovernanceRewards(rewards)
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

        <Output id="one" text='Governance APR' number={`${governanceAPR.toFixed(2)} %`} />
        <Output id="two" text='Governance rewards' number={governanceRewards.toFixed(2)}/>
      </div>

    </div>
  );
}

export default App;
