import {useRef, useState} from "react";
import {Navigate} from "react-router-dom"
import "../Stylesheets/SummonerForm.css"
import CheckSummoner from "./CheckSummoner";
import useGetFetch from "./useGetFetch";
import NavIcon from "./GeneralComponents/NavIcon"

const SummonerForm = () => {
    //useRef allows for a ref object of the form value below
    const textInput = useRef(null);

    //the form input name the user types in (-1 is just a placeholder for a name for the first hook)
    const [formName, setFormName] = useState("-1");
    
    const {data, isPending, error} = useGetFetch(`${process.env.REACT_APP_ROUTE_PATH}/summonerGame/${formName}`);

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
            <NavIcon icon={'?'} description={"Help"} path={'./Help'} />
            <div className="form-background">
                <img src={require("../assets/mordekaiser.gif")} alt=""/>
            </div>
            <div className="form-container">
                <form onSubmit={formSubmit}>
                    <label htmlFor="summonerName">Summoner Name:</label>
                    {/* <input className="textInput" maxLength={16} style={{"fontSize":"18px"}} type="text" id="summonerName" ref={textInput}></input>
                    <select >
                        <option value={"NA"}>NA</option>
                        <option value={"NA"}>EUW</option>
                        <option value={"NA"}>EUNE</option>
                        <option value={"NA"}>OC</option>
                        <option value={"NA"}>KR</option>
                        <option value={"NA"}>JP</option>
                        <option value={"NA"}>BR</option>
                        <option value={"NA"}>LA1</option>
                        <option value={"NA"}>LA2</option>
                        <option value={"NA"}>RU</option>
                        <option value={"NA"}>TR</option>
                        <option value={"NA"}>CN</option>
                    </select> */}
                    <div className="input-box">
                        <input className="text-input" maxLength={16} style={{"fontSize":"18px"}} type="text" id="summonerName" ref={textInput}></input>
                        <select>
                            <option value={"NA"}>NA</option>
                            <option value={"NA"}>EUW</option>
                            <option value={"NA"}>EUNE</option>
                            <option value={"NA"}>OC</option>
                            <option value={"NA"}>KR</option>
                            <option value={"NA"}>JP</option>
                            <option value={"NA"}>BR</option>
                            <option value={"NA"}>LA1</option>
                            <option value={"NA"}>LA2</option>
                            <option value={"NA"}>RU</option>
                            <option value={"NA"}>TR</option>
                            <option value={"NA"}>CN</option>
                        </select>
                    </div>
                    <input className="button" type="submit" value="Find Summoner"></input>
                </form>
                {isPending && formName.length >= 3 && <img className="loadingGif" src={require("../assets/loading.gif")} alt="loading..."/>}
                {data && data?.gameId && !isPending && <Navigate to={`./account/${formName}/ActiveGame`} />}
                {/* if summoner doesn't exist or not in game CheckSummoner */}
                {error && formName.length >= 3 && !isPending && <CheckSummoner formName={formName} data={error}/>}
            </div>
        </>
    )
}

export default SummonerForm;
