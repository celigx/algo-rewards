import '../App.sass';

const DateContainer = ({ text, date }) => {
  return (
    <div className="dateContainer">
      <h3 className="text">{text}</h3>
      <h3 className="date">{date}</h3>
    </div>
  )
}

const GovernancePeriod = ({ governanceDateTime }) => {
  return (
    <div className="periodContainer">
      <div className="upperPart">
        <h3 className="period">Period</h3>
        <h3 className="governancePeriod">Governance period #2</h3>
        <button className="changePeriodButton">Change period</button>
      </div>

      <div className="votingPeriod">
        <DateContainer text={"Voting start"} date={governanceDateTime.votingStart} />
        <DateContainer text={"Voting end"} date={governanceDateTime.votingEnd} />
      </div>

      <DateContainer text={"Period start"} date={governanceDateTime.periodStart} />
      <DateContainer text={"Registration end"} date={governanceDateTime.registrationEnd} />
      <DateContainer text={"Period end"} date={governanceDateTime.periodEnd} />

    </div>
  )
}

export default GovernancePeriod