import "../../Stylesheets/GeneralStyles/Loading.css"

const Loading = ({loadPercent, loadingBarVisible}) => {
  return (
    <div className="loading-container">
      <img src={require("../../assets/loading2.gif")} alt="loading..." />
      {loadingBarVisible && <div className="loading-bar" style={{"--load-percent": loadPercent}} />}
    </div>
  )
}

Loading.defaultProps = {
  loadingBarVisible: true,
  loadPercent: 0,
}

export default Loading