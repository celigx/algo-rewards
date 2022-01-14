import '../App.sass';
import { FiCheckCircle, FiMinus } from "react-icons/fi";

const ChoosePeriod = ({ title, selectPeriod, governancePeriod, id }) => {
  return (
    <div className={governancePeriod === id ? "period active" : "period"} onClick={selectPeriod} id={id}>
      <h3 className='title'>{title}</h3>
      {governancePeriod === id ? <FiCheckCircle className='checkIcon' /> : ''}
    </div>
  )
}

const GovernancePeriodModal = ({ governancePeriod, setGovernancePeriod }) => {
  const selectPeriod = (e) => {
    setGovernancePeriod(Number(e.target.id))
  }

  return (
    <div className="modal">

      <div className="top">
        <h3 className="title">Choose Period</h3>
        <button className="closeButton"><FiMinus /></button>
      </div>

      <div className="bottom">
        <ChoosePeriod title={"Governance period #2"} selectPeriod={selectPeriod} id={2} governancePeriod={governancePeriod} />
        <ChoosePeriod title={"Governance period #1"} selectPeriod={selectPeriod} id={1} governancePeriod={governancePeriod} />
      </div>

    </div>
  )
}

export default GovernancePeriodModal