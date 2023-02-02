import "../../Stylesheets/GeneralStyles/Loading.css"

const Loading = ({loadPercent, loadingBarVisible}) => {
  return (
    <div className="loading-container">
      <img src={require("../../assets/loading2.gif")} alt="loading..." />
      {loadingBarVisible && <div className="loading-bar" style={{"--width": loadPercent}} />}
    </div>
  )
}

Loading.defaultProps = {
  loadingBarVisible: false,
  loadPercent: 0,
}

export default Loading