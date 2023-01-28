import NavIcon from "./GeneralComponents/NavIcon"
import "../Stylesheets/HelpPage.css"

const HelpPage = () => {
  return (
    <>
        <NavIcon />
        <h1>HOW IT WORKS</h1>
        <div className="help-container">
            <div className="help-item">
                <p>Enter in a summoner name to search <br/> to receive player info.</p>
                <img className="help-img" src={require("../assets/help1.png")} alt=""></img>
            </div>
            <div className="help-item">
                <img className="help-img" src={require("../assets/help2.png")} alt=""></img>
                <p>See current game lobby and what each player excels at by reviewing their badges.</p>
            </div>
            <div className="help-item">
                <p>Review a player individually to get more <br/> information on their performances.</p>
                <img className="help-img" src={require("../assets/help3.png")} alt=""></img>
            </div>
        </div>
    </>
  )
}

export default HelpPage