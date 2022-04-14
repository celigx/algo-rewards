import '../App.sass';
import { FiCheckCircle, FiMinus } from "react-icons/fi";

const ChoosePeriod = ({ title, selectPeriod, governancePeriod, id }) => {
  return (
    <button className={governancePeriod === id ? "period active" : "period"} onClick={selectPeriod} id={id}>
      {title}
      {governancePeriod === id ? <FiCheckCircle className='checkIcon' id={id} /> : null}
    </button>
  )
}

const GovernancePeriodModal = ({ governancePeriod, setGovernancePeriod, showModal, setShowModal }) => {
  const selectPeriod = (e) => {
    setGovernancePeriod(Number(e.target.id))
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={showModal ? "modal showModal" : "modal"}>

      <div className="top">
        <h3 className="title">Choose Period</h3>
        <button className="closeButton" onClick={closeModal}><FiMinus /></button>
      </div>

      <div className="bottom">
        <ChoosePeriod title={"Governance period #3"} selectPeriod={selectPeriod} id={3} governancePeriod={governancePeriod} />
        <ChoosePeriod title={"Governance period #2"} selectPeriod={selectPeriod} id={2} governancePeriod={governancePeriod} />
        <ChoosePeriod title={"Governance period #1"} selectPeriod={selectPeriod} id={1} governancePeriod={governancePeriod} />
      </div>

    </div>
  )
}

export default GovernancePeriodModal