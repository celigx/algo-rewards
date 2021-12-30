import '../App.sass';

const Output = ({ text, number, id }) => {
  return (
    <div className="boxContainer">
      <h5 className="text">{text}</h5>
      <h5 className={`number ${id}`}>{number}</h5>
    </div>
  )
}

export default Output