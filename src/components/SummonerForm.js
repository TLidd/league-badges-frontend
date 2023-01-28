import {useRef, useState} from "react";
import {Navigate} from "react-router-dom"
import "../Stylesheets/SummonerForm.css"
import CheckSummoner from "./CheckSummoner";
import useGetFetch from "./useGetFetch";
import NavIcon from "./GeneralComponents/NavIcon";

const SummonerForm = () => {
    //useRef allows for a ref object of the form value below
    const textInput = useRef(null);

    //the form input name the user types in (-1 is just a placeholder for a name for the first hook)
    const [formName, setFormName] = useState("-1");

    let [region, setRegion] = useState('NA');

    const {data, isPending, error} = useGetFetch(`${process.env.REACT_APP_ROUTE_PATH}/summonerGame/${formName}/${region}`);

    const formSubmit = (e) => {
        e.preventDefault();
        if(textInput.current.value !== ""){
            let name = textInput.current.value;
            setFormName(name);
        }
        textInput.current.value = "";
    }

    const regionChange = (e) => {
        setRegion(e.target.value);
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
                    <div className="input-box">
                        <input className="text-input" maxLength={16} type="text" id="summonerName" ref={textInput}></input>
                        <select onChange={regionChange}>
                            <option value={"NA"}>NA</option>
                            <option value={"EUW"}>EUW</option>
                            <option value={"EUNE"}>EUNE</option>
                            <option value={"OC"}>OC</option>
                            <option value={"KR"}>KR</option>
                            <option value={"JP"}>JP</option>
                            <option value={"BR"}>BR</option>
                            <option value={"LA1"}>LA1</option>
                            <option value={"LA2"}>LA2</option>
                            <option value={"RU"}>RU</option>
                            <option value={"TR"}>TR</option>
                        </select>
                    </div>
                    <input className="button" type="submit" value="Find Summoner"></input>
                </form>
                {isPending && formName.length >= 3 && <img className="loadingGif" src={require("../assets/loading.gif")} alt="loading..."/>}
                {data && data?.gameId && !isPending && <Navigate to={`./account/${region}/${formName}/ActiveGame`} />}
                {/* if summoner doesn't exist or not in game CheckSummoner */}
                {error && formName.length >= 3 && !isPending && <CheckSummoner formName={formName} data={error} region={region}/>}
            </div>
        </>
    )
}

export default SummonerForm;
