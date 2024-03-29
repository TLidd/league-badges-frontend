//checks if summoner is in an active game
import { useNavigate } from "react-router-dom"
import "../../Stylesheets/GeneralStyles/VerifyPlayer.css"

const VerifyPlayer = ({searchedName, actualName, region}) => {
    const navigate = useNavigate();

    const SummonerPage = (e) => {
        navigate(`/account/${region}/${searchedName}`);
    }

    const SumForm = (e) => {
        navigate("/");
    }

    return (
        <>
        {
            actualName &&
            <div className="center">
                <p className="text">
                    {actualName} is not in an active game
                </p>
                <button className="button" onClick={SummonerPage}>View Summoner's Page</button>
            </div> 
        }
        {
            !actualName &&
            <div className="center">
                <p className="text">
                    {searchedName} does not exist
                </p>
                <button className="button" onClick={SumForm}>Search New Summoner</button>
            </div>
        
        }
        </>
    )
}

export default VerifyPlayer