import {useRef, useState} from "react";
import {Navigate} from "react-router-dom"
import "../Stylesheets/SummonerForm.css"
import CheckSummoner from "./CheckSummoner";
import useGetFetch from "./useGetFetch";

const SummonerForm = () => {
    //useRef allows for a ref object of the form value below
    const textInput = useRef(null);

    //the form input name the user types in (-1 is just a placeholder for a name for the first hook)
    const [formName, setFormName] = useState("-1");

    const {data, isPending, error} = useGetFetch(`/summonerGame/${formName}`);

    const formSubmit = (e) => {
        e.preventDefault();
        if(textInput.current.value !== ""){
            let name = textInput.current.value;
            setFormName(name);
        }
        textInput.current.value = "";
    }
    
    return (
        <>
            <div className="form-background">
                <img src={require("../assets/mordekaiser.gif")} alt=""/>
            </div>
            <div className="form-container">
                <form onSubmit={formSubmit}>
                    <label htmlFor="summonerName">Summoner Name:</label>
                    <input className="textInput" maxLength={16} style={{"fontSize":"25px"}} type="text" id="summonerName" ref={textInput}></input>
                    <input className="button" type="submit" value="Find Summoner"></input>
                </form>
                {isPending && formName.length >= 3 && <img className="loadingGif" src={require("../assets/loading.gif")} alt="loading..."/>}
                {data && data?.gameId && !isPending && <Navigate to={`./${formName}/ActiveGame`} />}
                {/* if summoner doesn't exist or not in game CheckSummoner */}
                {error && formName.length >= 3 && !isPending && <CheckSummoner formName={formName} data={error}/>}
            </div>
        </>
    )
}

export default SummonerForm;
