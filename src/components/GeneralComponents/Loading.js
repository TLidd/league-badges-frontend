import "../../Stylesheets/GeneralStyles/Loading.css"

const Loading = ({loadPercent}) => {
  return (
    <div className="loading-container">
      <img src={require("../../assets/loading2.gif")} alt="loading..." />
      <div className="loading-bar" style={{"--width": loadPercent}} />
    </div>
  )
}

export default Loading