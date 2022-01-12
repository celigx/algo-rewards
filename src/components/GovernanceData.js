import '../App.sass';

const GovernanceData = ({ committedStake, rewardPoolAmount, governors }) => {

  const convertNumber = (number) => {
    return Math.abs(Number(number)) >= 1.0e+9

    ? (Math.abs(Number(number)) / 1.0e+9).toFixed(1) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(number)) >= 1.0e+6

    ? (Math.abs(Number(number)) / 1.0e+6).toFixed(1) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(number)) >= 1.0e+3

    ? (Math.abs(Number(number)) / 1.0e+3).toFixed(0) + "K"

    : Math.abs(Number(number));
  }
  

  return (
    <div className="governanceContainer">
    <div className="dataContainer">
      <h1 className="title">Commited stake</h1>
      <h1 className="data">{convertNumber(committedStake / 1000000)}</h1>
    </div>
    <div className="dataContainer">
      <h1 className="title">Algo rewards</h1>
      <h1 className="data">{convertNumber(rewardPoolAmount / 1000000)}</h1>
    </div>
    <div className="dataContainer">
      <h1 className="title">Governors</h1>
      <h1 className="data">{convertNumber(governors)}</h1>
    </div>
  </div>
  )
}

export default GovernanceData