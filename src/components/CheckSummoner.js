import { useEffect, useState } from "react";
import {Navigate} from "react-router-dom";

import "../Stylesheets/CheckSummoner.css"

// check if summoner exists if not display does not exist
const NoSummoner = ({formName, data, region}) => {
    let [summonerExists, setExists] = useState(true);

    //sets timer to display a does not exist message for 10 seconds
    useEffect(() => {
        let timeEvent;
        if(data !== null){
            if(!data?.summonerName){
                setExists(false);
                timeEvent = setTimeout(() => {
                    setExists(true);
                }, 10000);
            }
        }
        return () => {
            clearTimeout(timeEvent);
        }
    }, [data]);

    return (
        <div>
            {
                !summonerExists && 
                <span className="noSummonerExists">
                    {`${formName} does not exist`}
                </span>
            }

            {summonerExists && data?.summonerName && <Navigate to={`./account/${region}/${data?.summonerName}`} />}   
        </div>
    )
}

export default NoSummoner