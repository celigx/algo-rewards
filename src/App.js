import { useEffect, useState } from 'react';
import './App.sass';
import GovernanceData from './components/GovernanceData';
import Output from './components/OutputData';

function App() {
  const [committedStake, setCommittedStake] = useState(0)
  const [rewardPoolAmount, setRewardPoolAmount] = useState(0)
  const [input, setInput] = useState(0)
  const [governanceAPR, setGovernanceAPR] = useState(0)
  const [governanceRewards, setGovernanceRewards] = useState(0)
  const [stakingRewards, setStakingRewards] = useState(0)
  const [totalRewards, setTotalRewards] = useState(0)
  const [totalAlgo, setTotalAlgo] = useState(0)
  const [governancePeriod, setGovernancePeriod] = useState(2)
  const [governors, setGovernors] = useState(0)

  useEffect(() => {
    getData()
    calculateGovernanceAPR()
    calculateGovernanceRewards()
    calculateStakingRewards()
    calculateTotalRewards()
    calculateTotalAlgo()
  }, [input, committedStake, rewardPoolAmount, governanceAPR, governanceRewards, stakingRewards,totalRewards, totalAlgo])

  const getData = () => {
    fetch(`https://governance.algorand.foundation/api/periods/governance-period-${governancePeriod}/`)
    .then(response => response.json())
    .then(response => {
      setCommittedStake(response.total_committed_stake)
      setRewardPoolAmount(response.algo_amount_in_reward_pool)
      setGovernors(response.governor_count)
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

  const calculateStakingRewards = () => {
    const rewards = ((input * 4.95) / 100) / 4

    setStakingRewards(rewards)
  }

  const calculateTotalRewards = () => {
    const rewards = Number(governanceRewards) + stakingRewards

    setTotalRewards(rewards)
  }

  const calculateTotalAlgo = () => {
    const total = totalRewards + parseInt(input)

    setTotalAlgo(total)
  }

  return (
    <div className="app">

      <div className="titleContainer">
        <h1 className='title'>Governance Rewards Calculator</h1>
      </div>

      <GovernanceData committedStake={committedStake} rewardPoolAmount={rewardPoolAmount} governors={governors} />

      <div className="container">
        <div className="inputContainer">
          <p className='title'>Enter your ALGO amount</p>
          <input type="number" placeholder='Enter ammount' className='input' onChange={inputValue} />
        </div>

        <Output id="one" text='Governance APR' number={`${governanceAPR.toFixed(2)} %`} />
        <Output id="two" text='Governance rewards' number={governanceRewards.toFixed(2)} />
        <Output id="three" text='Staking APY' number={`${4.95} %`} />
        <Output id="four" text="Staking Rewards" number={stakingRewards.toFixed(2)} />
        <Output id="five" text="Total Rewards" number={totalRewards.toFixed(2)} />
        <Output id="six" text="Total Algo After Period" number={input === '' ? (0).toFixed(2) : totalAlgo.toFixed(2)} />
      </div>

    </div>
  );
}

export default App;
