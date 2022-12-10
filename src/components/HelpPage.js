import NavIcon from "./NavIcon"
import "../Stylesheets/HelpPage.css"

const HelpPage = () => {
  return (
    <>
        <h1>HOW IT WORKS</h1>
        <NavIcon />
        <div className="help-container">
            <div className="help-item">
                <p>Enter in a summoner name to search <br/> to receive player info.</p>
                <img className="help-img" src={require("../assets/help1.gif")}></img>
            </div>
            <div className="help-item">
                <img className="help-img" src={require("../assets/help2.gif")}></img>
                <p>See current game lobby and what each player excels at by reviewing their badges.</p>
            </div>
            <div className="help-item">
                <p>Review a player individually to get <br/> more information on them.</p>
                <img className="help-img" src={require("../assets/help3.gif")}></img>
            </div>
        </div>
    </>
  )
}

export default HelpPage