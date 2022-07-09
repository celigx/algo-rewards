import '../App.sass';

import * as dayjs from 'dayjs'

const DateContainer = ({ text, date }) => {
  return (
    <div className="dateContainer">
      <h3 className="text">{text}</h3>
      <h3 className="date">{date}</h3>
    </div>
  )
}

const GovernancePeriod = ({ governanceDateTime, setShowModal, governancePeriod }) => {
  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div className="periodContainer">
      <div className="upperPart">
        <h3 className="period">Period</h3>
        <h3 className="governancePeriod">Governance period #{governancePeriod}</h3>
        <button className="changePeriodButton" onClick={openModal}>Change period</button>
      </div>

      <div className="votingPeriod">
        <DateContainer text={"Voting start"} date={governanceDateTime.votingStart === undefined ? 'No Voting Session yet!' : dayjs(governanceDateTime.votingStart).format("DD.MM.YYYY")} />
        <DateContainer text={"Voting end"} date={governanceDateTime.votingEnd === undefined ? 'No Voting Session yet!' : dayjs(governanceDateTime.votingEnd).format("DD.MM.YYYY")} />
      </div>

      <DateContainer text={"Period start"} date={dayjs(governanceDateTime.periodStart).format("DD.MM.YYYY")} />
      <DateContainer text={"Registration end"} date={dayjs(governanceDateTime.registrationEnd).format("DD.MM.YYYY")} />
      <DateContainer text={"Period end"} date={dayjs(governanceDateTime.periodEnd).format("DD.MM.YYYY")} />

    </div>
  )
}

export default GovernancePeriod